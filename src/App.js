import React from 'react';
import Header from './components/toolbar/Header';
import SideDrawer from './components/sidedrawer/SideDrawer';
import Backdrop from './components/backdrop/Backdrop';
import ParksListing from './components/parks/ParksListing';

import SearchBar from './components/searchbar/SearchBar';
import WelcomeBox from './components/WelcomeBox';
import './App.css';

import axios from 'axios';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      parks: [],
      sideDrawerOpen: false,
    }

    this.searchInput = React.createRef();
  }

  componentDidMount() {
    this.getParks();
  }

  loadMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyD-fl4UF1wh6Ioxl2UMO8SBes1zcggoCgg&callback=initMap")
    window.initMap = this.initMap
  }

  handleInputChange = (e) => {
    if (e.key === 'Enter') {
        this.getParks(e.target.value);
    }
}

  getParks = (near) => {
    near = near || 'California'
    const endPoint = "https://api.foursquare.com/v2/venues/explore?"
    const parameters = {
      client_id: "RNONMQ3F20KK3W1BP2ULDE1BUDF0BHISGZX1BGRNSMXDUJ4U",
      client_secret: "AQFJZBYWXYQ5ERMNN1OPZYJQX3X31PXHWGTRRMDG1KPIDG5X",
      query: "parks",
      near,
      v: "20182507"
    }

    axios.get(endPoint + new URLSearchParams(parameters))
      .then(response => {
        this.setState({
          parks: response.data.response.groups[0].items
        }, this.loadMap())
        console.log(this.state.parks);
      })
      .catch(error => {
        console.log('Error!' + error);
      })
  }
  
  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 36.7783, lng: -119.4179 },
      zoom: 6
    });

    const infowindow = new window.google.maps.InfoWindow();

    this.state.parks.map(park => {

      const contentString = `Name: ${park.venue.name}
                             Address: ${park.venue.location.address}
                             City: ${park.venue.location.city}`

      const marker = new window.google.maps.Marker({
        position: { lat: park.venue.location.lat, lng: park.venue.location.lng },
        map: map,
        title: park.venue.name
      })

      marker.addListener('click', function() {

        infowindow.setContent(contentString);

        infowindow.open(map, marker);
      })
    });
  }

  drawerToggleClickHanlder = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  };

  backdropClickHandler = () => {
    this.setState({
      sideDrawerOpen: false
    });
  };


  render() {
    let backDrop = null;

    if (this.state.sideDrawerOpen) {
      backDrop = <Backdrop click={this.backdropClickHandler}/>;
    }
    return (
        <div className="App" style={{height: '100%'}}>
          <Header drawerClickHandler={this.drawerToggleClickHanlder}/>
          <WelcomeBox />
          <div className="searchContainer">
            <SearchBar handleInputChange={this.handleInputChange}/>
          </div>
          { backDrop }
          <div className="box-field">
            <div className="mapContainer">
              <div id="map" />
            </div>
            <ParksListing parks={this.state.parks} />
          </div>
          <SideDrawer show={this.state.sideDrawerOpen}/>
        </div>
    );
    }
  }

  /*
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
    type="text/javascript"></script>
  */

  function loadScript(url){
    const index = window.document.getElementsByTagName("script")[0]
    const script = window.document.createElement("script")
    script.src = url
    script.asnyc = true
    script.defer = true
    index.parentNode.insertBefore(script, index)
    
  }

export default App;
