import techData from './fixtures/tech.json';
import designData from './fixtures/design.json';
import postData from './fixtures/engineering-note-2.json';

const areJSONStringsEqual = (jsonString1, jsonString2) => (
  JSON.stringify(JSON.parse(jsonString1)) === JSON.stringify(JSON.parse(jsonString2))
);

describe('Mocking API 테스트', () => {
  it('GET /api/posts?categoriesSlug=tech 요청 시 "tech" 카테고리의 JSON 데이터를 응답한다.', async () => {
    const response = await fetch('http://localhost/api/posts?categoriesSlug=tech');
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(JSON.parse(data)).toBeInstanceOf(Object);
    expect(areJSONStringsEqual(data, JSON.stringify(techData, null, 2))).toBe(true);
  });

  it('GET /api/posts?categoriesSlug=design로 요청 시 "design" 카테고리의 JSON 데이터를 응답한다.', async () => {
    const response = await fetch('http://localhost/api/posts?categoriesSlug=design');
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(JSON.parse(data)).toBeInstanceOf(Object);
    expect(areJSONStringsEqual(data, JSON.stringify(designData, null, 2))).toBe(true);
  });

  it('GET /api/posts?categoriesSlug=undefined 존재하지 않는 카테고리 요청 시 에러를 응답한다.', async () => {
    const response = await fetch('http://localhost/api/posts?categoriesSlug=undefined');

    expect(response.status).toBe(404);
    expect(response.statusText).toBe('Not Found');
  });

  it('GET /api/posts/:title로 요청 시 :title 파라미터에 해당하는 JSON 데이터를 응답한다.', async () => {
    const response = await fetch('http://localhost/api/posts/engineering-note-2');
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(JSON.parse(data)).toBeInstanceOf(Object);
    expect(areJSONStringsEqual(data, JSON.stringify(postData, null, 2))).toBe(true);
  });
});
