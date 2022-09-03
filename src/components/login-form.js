// Create a LoginForm component that should 
// contain username and password input fields, 
// an h3 that says Log In, and a border. Style 
// the component using the default generated css 
// file.

import React from 'react';
import SubmitButton from './submit-button';

export default class LoginForm extends React.Component {
    render() {
        return (
            <div className="card w-75 border container">
                <div className="card-header bg-primary">
                    <h3 className="text-white">Log In</h3>
                </div>
                <div className="card-body">
                    <input name="username" type="text" placeholder="Username"></input>
                    <input name="password" type="password" placeholder="Password"></input>
                </div>
                <div className="card-footer">
                    <SubmitButton />
                </div>
            </div>
        );
    }
}