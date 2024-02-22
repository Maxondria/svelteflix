export const baseURL = 'https://api.movies.tastejs.com';
export const mediaBaseURL = 'https://image.tmdb.org/t/p';

export type GetArgs = {
  fetch: typeof globalThis.fetch;
  endpoint: string;
  params?: Record<string, string>;
};

export const get = async <T>({ fetch, endpoint, params }: GetArgs): Promise<T> => {
  const q = new URLSearchParams(params);

  const response = await fetch(`${baseURL}/${endpoint}?${q}`);

  return (await response.json()) as T;
};

export const media = ({ filePath, width }: { filePath: string; width: number }) => {
  return `${mediaBaseURL}/w${width}${filePath}`;
};
