import React from 'react';
import SubmitButton from './submit-button';

export default class ReviewForm extends React.Component {
    render() {
        return (
            <div className="card w-75 border container">
                <div className="card-header bg-secondary">
                    <div className="text-white">Enter Review:</div>
                </div>
                <div className="card-body">
                    <input className="w-100" name="review" type="text"></input>
                </div>
                <div className="card-footer">
                    <SubmitButton />
                </div>
            </div>
        );
    }
}