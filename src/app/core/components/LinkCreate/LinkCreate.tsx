import React from 'react';

import './LinkCreate.css';
import {NavLink} from 'react-router-dom';

export const LinkCreate = () => {
    return (
        <div className="row mb-4 text-center">
            <div className="col-sm-12">
                <NavLink className="link-create btn btn-primary text-white disabled" to="">Create</NavLink>
            </div>
        </div>
    );
};
