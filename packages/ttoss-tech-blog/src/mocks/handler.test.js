import fixtures from './fixtures';

const areJSONStringsEqual = (jsonString1, jsonString2) => (
  JSON.stringify(JSON.parse(jsonString1)) === JSON.stringify(JSON.parse(jsonString2))
);

describe('Mocking API 테스트', () => {
  it('GET /api/posts?categoriesSlug=tech 요청 시 "tech" 카테고리의 JSON 데이터를 응답한다.', async () => {
    const category = 'tech';
    const response = await fetch(`http://localhost/api/posts?categoriesSlug=${category}`);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toBeInstanceOf(Object);
    expect(
      areJSONStringsEqual(JSON.stringify(data), JSON.stringify(fixtures[category], null, 2)),
    ).toBe(true);
  });

  it('GET /api/posts?categoriesSlug=design로 요청 시 "design" 카테고리의 JSON 데이터를 응답한다.', async () => {
    const category = 'design';
    const response = await fetch(`http://localhost/api/posts?categoriesSlug=${category}`);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(response.headers.get('Content-Type')).toBe('application/json');
    expect(data).toBeInstanceOf(Object);
    expect(
      areJSONStringsEqual(JSON.stringify(data), JSON.stringify(fixtures[category], null, 2)),
    ).toBe(true);
  });

  it('GET /api/posts?categoriesSlug=undefined 존재하지 않는 카테고리 요청 시 에러를 응답한다.', async () => {
    const category = undefined;
    const response = await fetch(`http://localhost/api/posts?categoriesSlug=${category}`);

    expect(response.status).toBe(404);
    expect(response.statusText).toBe('Not Found');
  });

  it('GET /api/posts/:title로 요청 시 :title 파라미터에 해당하는 JSON 데이터를 응답한다.', async () => {
    const title = 'engineering-note-2';
    const mockData = fixtures.posts.results.find(({ key }) => key === title);
    const response = await fetch(`http://localhost/api/posts/${title}`);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toBeInstanceOf(Object);
    expect(
      areJSONStringsEqual(JSON.stringify(data), JSON.stringify(mockData, null, 2)),
    ).toBe(true);
  });
});
