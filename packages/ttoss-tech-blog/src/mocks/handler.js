import { http, HttpResponse } from 'msw';
import fixtures from './fixtures';

const getPostResolver = ({ params }) => {
  try {
    const { title } = params;
    const { posts } = fixtures;
    const data = posts.results.find(({ key }) => key === title);

    if (!title) return new HttpResponse(null, { status: 404, statusText: 'Missing required parameter.' });

    if (!posts || !data) return new HttpResponse(null, { status: 404, statusText: 'Not Found' });

    return HttpResponse.json(data);
  } catch (error) {
    return new HttpResponse(null, { status: 500, statusText: 'Internal Server Error' });
  }
};

const getCategoryResolver = ({ request }) => {
  try {
    const url = new URL(request.url);
    const categoriesSlug = url.searchParams.get('categoriesSlug');
    const data = fixtures[categoriesSlug];

    if (!categoriesSlug) return new HttpResponse(null, { status: 404, statusText: 'Missing required parameter.' });

    if (!data) return new HttpResponse(null, { status: 404, statusText: 'Not Found' });

    return HttpResponse.json(data);
  } catch (error) {
    return new HttpResponse(null, { status: 500, statusText: 'Internal Server Error' });
  }
};

export const handlers = [
  http.get('/api/posts/:title', getPostResolver),
  http.get('/api/posts', getCategoryResolver),
];
