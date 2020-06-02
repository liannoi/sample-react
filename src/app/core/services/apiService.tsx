export interface ApiService<TModel, TListModel> {
    getAll(timeout?: number): Promise<TListModel>;

    /*create(model: TModel): Promise<TModel>;

    getById(id: number): Promise<TModel>;

    update(id: number, model: TModel): Promise<TModel>;

    delete(id: number): Promise<TModel>;*/
}
