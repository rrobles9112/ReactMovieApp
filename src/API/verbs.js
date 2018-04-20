export const POST = (url, data) => ({
  method: 'post',
  url,
  data,
});

export const GET = url => ({
  method: 'get',
  url,
});

export const DELETE = url => ({
  method: 'delete',
  url,
});