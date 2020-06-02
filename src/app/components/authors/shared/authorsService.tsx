import {AbstractApiService} from '../../../core/services/abstractApiService';
import {AuthorModel} from './authorModel';
import {AuthorsListViewModel} from './authorsListViewModel';
import {authorsEndpoint} from '../../../addresses';

export class AuthorsService extends AbstractApiService<AuthorModel, AuthorsListViewModel> {
    constructor() {
        super(authorsEndpoint);
    }
}
