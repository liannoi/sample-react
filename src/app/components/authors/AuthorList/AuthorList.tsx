import React from 'react';

import {AuthorsListViewModel} from '../shared/authorsListViewModel';
import {AuthorsService} from '../shared/authorsService';
import './AuthorList.css';
import {LinkCreate} from '../../../core/components/LinkCreate/LinkCreate';

type AuthorListProps = {}
type AuthorListState = { viewModel: AuthorsListViewModel }

export class AuthorList extends React.Component<AuthorListProps, AuthorListState> {
    private authorsService: AuthorsService;

    constructor(props: AuthorListProps) {
        super(props);
        this.state = {viewModel: {authors: []}};
        this.authorsService = new AuthorsService();
    }

    public async componentDidMount(): Promise<void> {
        await this.fetchAuthors();
    }

    public capitalizeFirstLetter(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    public render() {
        return (
            <React.Fragment>
                <div className="row mt-5 mb-4 text-center">
                    <div className="col-sm-12">
                        <h2>Authors</h2>
                    </div>
                </div>

                <LinkCreate/>

                <div className="row mb-4">
                    <div className="offset-sm-3"/>
                    <div className="col-sm-6">
                        <table className="table border table-sm table-striped">
                            <thead className="thead-light table-bordered">
                            <tr>
                                <th>Last Name</th>
                                <th>First Name</th>
                                <th className="text-black-50">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.viewModel.authors.map((item, index) => (
                                    <tr key={index}>
                                        <td className="text-uppercase font-weight-bolder">{item.authorLastName}</td>
                                        <td>{this.capitalizeFirstLetter(item.authorName.toLowerCase())}</td>

                                        <td>
                                            <a className="btn btn-light border btn-sm mr-2 pl-3 pr-3 font-weight-bolder disabled">
                                                Edit
                                            </a>

                                            <a className="btn btn-light border btn-sm pl-3 pr-3 font-weight-bolder disabled">
                                                Delete
                                            </a>
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

    private async fetchAuthors(): Promise<void> {
        this.setState({viewModel: await this.authorsService.getAll()});
    }
}
