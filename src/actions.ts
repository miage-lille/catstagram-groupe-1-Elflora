import { Picture } from './types/picture.type';
import { Decrement, FetchCatsCommit, FetchCatsRequest, FetchCatsRollback, Increment, CloseModal, SelectPicture } from './types/actions.type';
import { success } from './api';

export const increment = (): Increment => ({ type: 'INCREMENT' });
export const decrement = (): Decrement => ({ type: 'DECREMENT' });

export const fetchCatsRequest = (counter: number): FetchCatsRequest => ({
  type: 'FETCH_CATS_REQUEST',
  method: 'GET',
  path: `https://pixabay.com/api/?key=48759792-4bf55c0efb566aa37a62fbce0&per_page=${counter}&q=cat`,
});

export const fetchCatsCommit = (payload: Picture[]): FetchCatsCommit => ({
  type: 'FETCH_CATS_COMMIT',
  payload: success(payload),
});

export const fetchCatsRollback = (error: Error): FetchCatsRollback => ({
  type: 'FETCH_CATS_ROLLBACK',
  error,
});

export const selectPicture = (picture: Picture): SelectPicture => ({ type: 'SELECT_PICTURE', picture });
export const closeModal = (): CloseModal => ({ type: 'CLOSE_MODAL' });

export type Actions =
  | Increment
  | Decrement
  | SelectPicture
  | CloseModal
  | FetchCatsRequest
  | FetchCatsCommit
  | FetchCatsRollback;