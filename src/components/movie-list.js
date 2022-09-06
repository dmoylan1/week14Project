import React from 'react';
import Movie from './movie';


export default class MovieList extends React.Component {
    render() {
     
      let reviews = [
        {
        content: 'Best movie of the year!',
        username: 'Rotten Tomatoes',
        date: '4-24-1979'
      },
      { 
        content: 'Simply amazing.',
        username: 'Critiques',
        date: '11-06-2014'
      },
      {
        content: 'A classic for sure',
        username: 'Steven Spealburg',
        date: '9-25-2017'
      }
      ];
      return (
        <div className="container">
          <Movie {...{review: reviews}}/>
          <Movie />
          <Movie />
        </div>
      );
    }
  }