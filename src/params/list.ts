export const match: (param: string) => boolean = (param) => ['trending', 'now-playing', 'upcoming'].includes(param);
