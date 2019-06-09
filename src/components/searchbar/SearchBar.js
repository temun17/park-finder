import React from 'react';

export default class SearchBar extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="searchbar">
                <input onKeyPress={(event) => {this.props.handleInputChange(event)}}
                       ref={this.searchInput}
                       type='search' 
                       placeholder='Try "California"' 
                       aria-label='Search'
                />
            </div>
        );
    }
}