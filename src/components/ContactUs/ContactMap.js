import { PropTypes } from "prop-types";
import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import marker from '../../assets/images/map.png';

const ContactMap = props => {
  const mapStyles = {
    width: "100%",
    height: "100%"
  };

  return (
    <Map
      google={props.google}
      zoom={15}
      style={mapStyles}
      initialCenter={{ lat: props.latitude, lng: props.longitude }}
    >
      <Marker
        position={{ lat: props.latitude, lng: props.longitude }}
        icon={{
          url: marker
        }}
        animation={props.google.maps.Animation.BOUNCE}
        className="marker"
      />
    </Map>
  );
};

ContactMap.propTypes = {
  google: PropTypes.object,
  latitude: PropTypes.string,
  longitude: PropTypes.string
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDbOU5JUmNH8BTiOaCiRWPrvdGlapqdD34"
})(ContactMap);
