import React from 'react';
import Review from './review';
import StarsContainer from './stars-container';
import ReviewForm from './review-form';

export default class ReviewList extends React.Component {
    render() {
      return (
        <div>
            <StarsContainer />
            <ReviewForm />
        </div>
         );
        }
    }