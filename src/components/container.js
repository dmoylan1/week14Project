import React from 'react';
import MovieList from './movie-list';
import ReviewList from './review-list';


export default class Container extends React.Component {
    render() {
      return (
        <div className="container">
          <MovieList />
          <ReviewList />

        </div>  
      );
    }
  }

//   a.	MovieList – a container for all the Movie components and their data.
// b.	Movie – a component that represents movie data (i.e. image, synopsis, rating, etc…)
// c.	Stars – a one to five-star rating component that allows users to rate something 
// (movies in this case, but remember that components are reusable, so you could use it elsewhere!)
// d.	ReviewList – a container inside of a Movie that houses Review components.
// e.	Review – A text review a user can leave on a movie.
// f.	ReviewForm – a form at the bottom of a Movie component that allows users to leave reviews. 
// When submitted, the review should be added to the movie. 
// All this data can be stored in an array, no networking or database needed for this assignment.
