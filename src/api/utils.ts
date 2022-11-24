export const getRequestParams = (limit?: number) => {
  const params = new URLSearchParams();
  params.append('country', 'TR');
  params.append('limit', limit ? limit.toString() : '20');
  return params;
};
