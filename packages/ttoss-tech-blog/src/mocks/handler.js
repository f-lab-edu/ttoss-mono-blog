import { http, HttpResponse } from 'msw';

const fs = require('node:fs');
const path = require('path');

const getPostResolver = ({ params }) => {
  try {
    const { title } = params;
    const filePath = path.join(__dirname, 'fixtures', `${title}.json`);
    const data = fs.readFileSync(filePath, 'utf8');

    return HttpResponse.json(data, { status: 200 });
  } catch (error) {
    return new HttpResponse(null, { status: 404 });
  }
};

const getCategoryResolver = ({ request }) => {
  const url = new URL(request.url);
  const categoriesSlug = url.searchParams.get('categoriesSlug');

  if (!categoriesSlug) return new HttpResponse(null, { status: 404 });

  try {
    const filePath = path.join(__dirname, 'fixtures', `${categoriesSlug}.json`);
    const data = fs.readFileSync(filePath, 'utf8');

    return HttpResponse.json(data, { status: 200 });
  } catch (error) {
    return new HttpResponse(null, { status: 404 });
  }
};

export const handlers = [
  http.get('/api/posts/:title', getPostResolver),
  http.get('/api/posts', getCategoryResolver),
];
