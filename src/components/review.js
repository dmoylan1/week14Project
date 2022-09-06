import React from 'react';
import SubmitButton from './submit-button';

export default class Review extends React.Component {
    render() {
      return (
        <div className="card w-75">
          <div className="card-header bg-success text-white">
            {this.props.name} {this.props.release}
            </div>
          <div className="card-body">
            {this.props.synopsis}
          </div>
          <div className="card-footer">
            <SubmitButton />
          </div>
        </div>
      );
    }
}