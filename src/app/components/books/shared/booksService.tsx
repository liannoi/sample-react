import {AbstractApiService} from '../../../core/services/abstractApiService';
import {BookModel} from './bookModel';
import {BooksListViewModel} from './booksListViewModel';
import {booksEndpoint} from '../../../addresses';

export class BooksService extends AbstractApiService<BookModel, BooksListViewModel> {
    constructor() {
        super(booksEndpoint);
    }
}
