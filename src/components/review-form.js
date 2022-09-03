import React from 'react';
import SubmitButton from './submit-button';

export default class ReviewForm extends React.Component {
    render() {
        return (
            <div className="card w-50 border container">
                <div className="card-header bg-primary">
                    <h3 className="text-white">Enter Review:</h3>
                </div>
                <div className="card-body">
                    <input name="review" type="text"></input>
                </div>
                <div className="card-footer">
                    <SubmitButton />
                </div>
            </div>
        );
    }
}