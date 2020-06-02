import React from 'react';

import {BooksListViewModel} from '../shared/booksListViewModel';
import {BooksService} from '../shared/booksService';
import {LinkCreate} from '../../../core/components/LinkCreate/LinkCreate';
import './BookList.css';
import {NavLink} from 'react-router-dom';

type BookListProps = {}
type BookListState = { viewModel: BooksListViewModel }

export class BookList extends React.Component<BookListProps, BookListState> {
    private booksService: BooksService;

    constructor(props: BookListProps) {
        super(props);
        this.state = {viewModel: {books: []}};
        this.booksService = new BooksService();
    }

    public async componentDidMount(): Promise<void> {
        await this.fetchBooks();
    }

    public render() {
        return (
            <React.Fragment>
                <div className="row mt-5 mb-4 text-center">
                    <div className="col-sm-12">
                        <h2>Books</h2>
                    </div>
                </div>

                <LinkCreate/>

                <div className="row mb-4">
                    <div className="offset-sm-3"/>
                    <div className="col-sm-6">
                        <table className="table border table-sm table-striped">
                            <thead className="thead-light table-bordered">
                            <tr>
                                <th>Title</th>
                                <th>Year</th>
                                <th className="text-black-50">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.viewModel.books.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.bookName}</td>
                                        <td>{item.publishYear}</td>

                                        <td>
                                            <NavLink
                                                className="btn btn-light border btn-sm mr-2 pl-3 pr-3 font-weight-bolder disabled"
                                                to="">
                                                Edit
                                            </NavLink>

                                            <NavLink
                                                className="btn btn-light border btn-sm pl-3 pr-3 font-weight-bolder disabled"
                                                to="">
                                                Delete
                                            </NavLink>
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                    <div className="offset-sm-3"/>
                </div>
            </React.Fragment>
        );
    }

    private async fetchBooks(): Promise<void> {
        this.setState({viewModel: await this.booksService.getAll()});
    }
}
