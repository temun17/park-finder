import React from 'react';
import { Item } from 'semantic-ui-react';

export default class ParkCard extends React.Component {

	render() {
		return (
            <React.Fragment>
			<Item>
                <div style={{display: "flex", flexDirection: "row" }}>
                <Item.Image
					src="https://www.nilfiskcfm.com/wp-content/uploads/2016/12/placeholder.png"
					width="250px"
					height="250px"
                    alt=""
                    style={{marginRight: '10px'}}
				/>
                        <p style={{color: 'rgb(95, 124, 162)', fontSize: '20px', cursor: 'pointer'}}>Park Name: {this.props.park.venue.name}</p>
				</div>
			<Item.Content>
					<Item.Meta>
						<span className="cinema">
                            <p>Street: {this.props.park.venue.location.address}</p>
                            <p>City: {this.props.park.venue.location.city}</p>
                            <p>State: {this.props.park.venue.location.state}</p>
							<br />
							<br />
							<strong>
								Hours: N/A
							</strong>
							<br />
                            <br />
                            <hr />
						</span>
					</Item.Meta>
			</Item.Content>
            <br />
			</Item>
            </React.Fragment>
		);
	}
}