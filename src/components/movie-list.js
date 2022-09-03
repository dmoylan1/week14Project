import React from 'react';
import Post from './post';

let e = React.createElement;

export default class NewsFeed extends React.Component {
    render() {
      let comments = [
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
      return (
        <div className="container">
          <Movie {...{comments: comments, content: 'This is my post content!'}}/>
          <Movie {...{name: 'Another one dude!'}}/>
          <Movie />
        </div>
      );
    }
  }