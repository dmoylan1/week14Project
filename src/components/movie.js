import React from 'react';
import ReviewList from './review-list';
import Review from './review';

export default class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      release: props.release,
      synopsis: props.synopsis    }
  }
    render() {
        let movies = [
            {
            name: 'Bambi',
            release: '8-21-1942',
            synopsis: 'A young deer named Bambi joins with his friends to explore their forest home.'
          },
          { 
            name: 'Beauty and the Beast',
            release: '11-22-1991',
            synopsis: 'A beautiful young girl is taken captive by a horrible beast. She falls in love with him and breaks the curse afer getting to know the real him.'
          },
          {
            name: 'Lion King',
            release: '6-24-1994',
            synopsis: 'After losing his father in a tragic way, a young lion returns home to save his land and his people.'
          }
          ];
        let reviews;
        if (this.state.reviews) {
          reviews = this.state.reviews.map((review, index) => <Review key={index} {...review} />);
        }

      return (
        <div className="card w-75">
          <div className="card-header bg-primary text-white">
          Movie Title: {this.props.name} Release Date: {this.props.release}

          </div>
          <div className="card-body">
            {this.props.synopsis}
          </div>
          <div className="card-footer">

            {reviews}
          </div>
          <div>
            <ReviewList />
          </div>
        </div>
      );
    }
}


