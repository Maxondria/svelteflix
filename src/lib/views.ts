export interface View {
  title: string;
  endpoint: string;
}

export enum ViewType {
  TRENDING = 'trending',
  NOW_PLAYING = 'nowPlaying',
  UPCOMING = 'upComing'
}

export const viewToViewTypeMap: Record<'trending' | 'now-playing' | 'upcoming', ViewType> = {
  trending: ViewType.TRENDING,
  'now-playing': ViewType.NOW_PLAYING,
  upcoming: ViewType.UPCOMING
};

export const views: Record<ViewType, View> = {
  [ViewType.TRENDING]: {
    title: 'Trending',
    endpoint: 'trending/movie/day'
  },
  [ViewType.NOW_PLAYING]: {
    title: 'Now Playing',
    endpoint: 'movie/now_playing'
  },
  [ViewType.UPCOMING]: {
    title: 'Upcoming',
    endpoint: 'movie/upcoming'
  }
};
