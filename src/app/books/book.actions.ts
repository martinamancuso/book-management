import { createAction, props } from '@ngrx/store';
import { Book } from '../models/book';

// first action
export const AddBook = createAction('[Book] Add Book', props<Book>());

// second action
export const RemoveBook = createAction(
  '[Book] Remove Book',
  props<{ bookId: string }>()
);
