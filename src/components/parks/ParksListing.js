import React from 'react';

import ParkCard from './ParkCard';

class ParksListing extends React.Component {
    constructor(props) {
        super(props);
    }

    renderParks() {
        return this.props.parks.map((park, i) => {
            return ( 
                <ParkCard key={i}
                           park={park}
                />
            );
        })
    }

    render() {
        return (
            <div className="parks-list_container">
                {this.renderParks()}
            </div>
        );
    }
}

export default ParksListing;