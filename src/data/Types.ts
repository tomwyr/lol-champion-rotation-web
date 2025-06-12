export type AsyncDataState<T> =
  | { type: 'initial' }
  | { type: 'loading' }
  | { type: 'error' }
  | { type: 'data'; value: T }
