export const baseURL = 'https://api.movies.tastejs.com';
export const mediaBaseURL = 'https://image.tmdb.org/t/p';

const cache = new Map();

export type GetArgs = {
  fetch: typeof globalThis.fetch;
  endpoint: string;
  params?: Record<string, string>;
};

export const get = async <T>({ fetch, endpoint, params }: GetArgs): Promise<T> => {
  const q = new URLSearchParams(params);

  const url = `${baseURL}/${endpoint}?${q}`;

  if (cache.has(url)) {
    return cache.get(url) as T;
  }

  const response = await fetch(url);

  const data = (await response.json()) as T;

  cache.set(url, data);

  return data;
};

export const media = ({ filePath, width }: { filePath: string; width: number }) => {
  return `${mediaBaseURL}/w${width}${filePath}`;
};
