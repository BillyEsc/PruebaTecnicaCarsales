export interface ListPage<T> {
  info: {
    count: number;
    pages: number;
    next: string;
    previous: string;
  };
  results: T[];
}
