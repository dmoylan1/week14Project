import React from 'react';
import Stars from './stars';

export default class StarsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counts: {},
        };
        this.countClicks = this.countClicks.bind(this);

    }

    countClicks(name) {
        this.setState(state => {
            state.counts[name]
                ? state.counts[name] += 1
                : state.counts[name] = 1;
        
    return state;
        });
    }

    render() {
        return (
            <div>
                <Stars
                     name="stars"
                     count={this.state.counts.stars}
                     onClick={this.countClicks} 
                />

            </div>
        );
    }
}