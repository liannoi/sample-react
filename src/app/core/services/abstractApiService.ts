import {ApiService} from './apiService';

export abstract class AbstractApiService<TModel, TListModel> implements ApiService<TModel, TListModel> {
    protected endpoint: string;

    protected constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    public getAll(timeout?: number): Promise<TListModel> {
        return fetch(this.endpoint).then(response => response.json());
    }
}
