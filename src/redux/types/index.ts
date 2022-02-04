export interface IPhoto {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface IState {
  photos: Array<IPhoto>;
  isLoading: boolean;
  error: string;
}
