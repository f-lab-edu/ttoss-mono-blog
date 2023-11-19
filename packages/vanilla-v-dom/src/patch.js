import { multi, method } from '@arrows/multimethod';
import {
  PATCH_TEXT,
  PATCH_PROPS,
  PATCH_CHILDREN,
  PATCH_CREATE_NODE,
  PATCH_REMOVE_NODE,
  PATCH_REPLACE_NODE,
} from './constants';
import createElement from './createElement';

/**
 * @param {Node} node
 * @param {object[]} changes
 * @void
 */
const apply = multi(
  (node, changes) => changes.type,

  // 텍스트 노드 값 업데이트
  method(PATCH_TEXT, (node, changes) => (
    node.replaceData(0, node.nodeValue.length, changes.props.nodeValue)
  )),

  // 노드 생성, 추가
  method(PATCH_CREATE_NODE, (node, changes) => (
    node.appendChild(createElement(changes.update))
  )),

  // 노드 제거
  method(PATCH_REMOVE_NODE, (node) => (
    node.remove()
  )),

  // 기존 노드 변경
  method(PATCH_REPLACE_NODE, (node, changes) => (
    node.replaceWith(createElement(changes.update))
  )),

  // 노드 프로퍼티 변경
  method(PATCH_PROPS, (node, changes) => {
    Object.entries(changes.props).forEach(([key, value]) => {
      if (value) node.setAttribute(key, value);
      else node.removeAttribute(key);
    });
  }),

  // 해당 노드의 변경 사항은 없지만, 자식 노드의 변경 사항이 존재할 경우
  method(PATCH_CHILDREN, (node, changes) => {
    changes.children.forEach((childPatchArray, idx) => {
      // 하나의 노드에도 n개의 변경 사항이 존재할 수 있다.
      childPatchArray.forEach((patch) => apply((node.childNodes[idx] || node), patch));
    });
  }),
);

/**
 * 변경 사항을 노드에 적용
 * @param {Node} node
 * @param {object[]} patches
 */
const patch = (node, patches) => {
  if (node && patches) {
    patches.forEach((changes) => apply(node, changes));
  }
};

export default patch;
