import _ from 'lodash';
import {
  TEXT_ELEMENT,
  PATCH_TEXT,
  PATCH_PROPS,
  PATCH_CHILDREN,
  PATCH_CREATE_NODE,
  PATCH_REMOVE_NODE,
  PATCH_REPLACE_NODE,
} from './constants';

/**
 * @param {object} current
 * @param {object} updated
 * @returns {object} 프로퍼티 변경 사항
 */
const diffProps = (current, updated) => {
  const currentKeys = Object.keys(current);
  const updatedKeys = Object.keys(updated);

  // 기존에 존재하지 않던 프로퍼티가 추가된 경우 업데이트, 업데이트가 없다면 null
  if (!currentKeys.length) {
    if (!updatedKeys.length) return null;
    return updated;
  }

  // 키의 변경사항이 없는 경우 값만 업데이트, 업데이트가 없다면 null
  if (currentKeys.join() === updatedKeys.join()) {
    const diffKeys = currentKeys.filter((key) => current[key] !== updated[key]);
    return (diffKeys.length) ? { ...current, ...updated } : null;
  }

  // 이외의 키의 삭제, 추가 사항이 존재할 경우
  return { ...currentKeys.reduce((a, v) => ({ ...a, [v]: null }), {}), ...updated };
};

/**
 * @param {object[]} current
 * @param {object[]} update
 * @returns {object[] | []} 자식 노드들의 변경 사항
 */
const diffChildren = (current, update) => {
  if (_.isEqual(current, update)) return [];

  if (current.length > update.length) {
    return current.map((child, idx) => diff(child, update[idx])).filter(Boolean);
  }

  return update.map((child, idx) => diff(current[idx], child)).filter(Boolean);
};

/**
 * @param {object} current
 * @param {object} update
 * @returns {object[] | []} current, update 전체 변경 사항
 */
const diff = (current, update) => {
  // 1. 업데이트로 추가 된 경우
  if (!current && update) {
    return [{
      type: PATCH_CREATE_NODE,
      update,
    }];
  }

  // 2. 업데이트로 삭제된 경우
  if (current && !update) {
    return [{
      type: PATCH_REMOVE_NODE,
      update,
    }];
  }

  // 3. 텍스트 엘리먼트일 경우
  if (
    current?.type === TEXT_ELEMENT
    && update?.type === TEXT_ELEMENT
  ) {
    if (current.props.nodeValue !== update.props.nodeValue) {
      return [{
        type: PATCH_TEXT,
        props: update.props,
      }];
    }
    return [];
  }

  // 4. 엘리먼트의 타입이 다른 경우
  if (current?.type !== update?.type) {
    return [{
      type: PATCH_REPLACE_NODE,
      update,
    }];
  }

  // 5. 엘리먼트의 타입이 같을 경우 (props & children 비교 필요)
  const patches = [];

  if (current?.type === update?.type) {
    // 엘리먼트 타입이 동일하더라도 키가 존재할 때 키가 다르면 다른 엘리먼트로 취급
    if (current.props?.key !== update.props?.key) {
      return [{
        type: PATCH_REPLACE_NODE,
        update,
      }];
    }

    const props = diffProps(current.props, update.props);

    if (props) {
      patches.push({
        type: PATCH_PROPS,
        props,
      });
    }

    if (current.children && update.children) {
      const children = diffChildren(current.children, update.children);

      if (children && children.flat().length) {
        patches.push({
          type: PATCH_CHILDREN,
          children,
        });
      }
    }
  }
  return patches;
};

export default diff;
