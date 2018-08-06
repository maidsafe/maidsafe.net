import React from 'react';
import { withSiteData } from 'react-static'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import OpenLayers from '../OpenLayers';
//
import CONST from '../constants';
import Base from './partials/base_wrapper';
import MapLocationSmall from '../../public/_temp/img/maps_bg_small.png'
class Contact extends React.Component {
  constructor() {
    super();
    this.map = {
      lat: 55.4810467, lng: -4.6065731
    };
  }

  componentDidMount() {
    const map = new OpenLayers.Map(`Location`);
    const mapnik         = new OpenLayers.Layer.OSM();
    const fromProjection = new OpenLayers.Projection("EPSG:4326");   // Transform from WGS 1984
    const toProjection   = new OpenLayers.Projection("EPSG:900913"); // to Spherical Mercator Projection
    const position       = new OpenLayers.LonLat(this.map.lng, this.map.lat).transform( fromProjection, toProjection);
    const zoom           = 16;
    map.addLayer(mapnik);

    const markers = new OpenLayers.Layer.Markers( "Markers" );

    map.addLayer(markers);
    markers.addMarker(new OpenLayers.Marker(position));
    map.setCenter(position, zoom);
  }

  render() {
    const myLatLng = { lat: 55.4810467, lng: -4.6065731 };

    const MyMapComponent = withScriptjs(withGoogleMap((props) =>
      <GoogleMap
        defaultZoom={18}
        defaultCenter={myLatLng}
      >
        {props.isMarkerShown && <Marker position={myLatLng} />}
      </GoogleMap>
    ));

    return (
      <div className="contact">
        <div className="content-1">
          <h3>Contact MaidSafe</h3>
        </div>
        <div className="content-3">
          <h3 className="title">Technical Enquiries</h3>
          <h4 className="sub-title">GitHub:</h4>
          <ul className="list">
            <li><a href="https://github.com/maidsafe" target="_blank">GitHub</a></li>
          </ul>
          <p className="p">
            If have questions regarding code contributions, or would like to get in
    touch with our development team please use one of the following methods:
  </p>
          <div className="btn-list">
            <a className="al-btn invert" href="https://github.com/maidsafe" target="_blank">
              <span className="icn github"></span>GitHub
    </a>
            <a className="al-btn invert" href="https://forum.safedev.org/" target="_blank">
              <span className="icn forum"></span>Forum
    </a>
          </div>
        </div>
        <div className="content-3">
          <h3 className="title">Community Support</h3>
          <p className="p">
            If you are seeking support with SAFE Network testnets, or have questions about where and how to acquire MaidSafeCoin, you can browse and raise a support thread on the community run forum: <a href="https://safenetforum.org/c/support" target="_blank">https://safenetforum.org/c/support</a>.
  </p>
        </div>
        <div className="content-3">
          <h3 className="title">Business and Press Enquiries</h3>
          <p className="p">
            Anyone seeking further information about business partnerships, or press interviews should email Nick at: <a
              href="mailto:pr@maidsafe.net">pr@maidsafe.net</a>.
  </p>
        </div>
        <div className="content-3">
          <h3 className="title">Meetups</h3>
          <p className="p">
            There are currently Meetups in countries all over the world,
    including Argentina, Australia, Canada, Netherlands, UK and the US.
    If you would like to get involved, please contact them directly for more information.
  </p>
          <ul className="list top-pad">
            <li><a href="//www.meetup.com/SAFE-Network-Amsterdam/" target="_blank">Amsterdam</a></li>
            <li><a href="//www.meetup.com/Project-SAFE-Boston/" target="_blank">Boston</a></li>
            <li><a href="//www.meetup.com/SAFEnetwork-Chicago/" target="_blank">Chicago</a></li>
            <li><a href="//www.meetup.com/SAFE-Network-Cordoba/" target="_blank">Córdoba</a></li>
            <li><a href="//www.meetup.com/Project-SAFE-London/" target="_blank">London</a></li>
            <li><a href="//www.meetup.com/SAFE-Network-Melbourne/" target="_blank">Melbourne</a></li>
            <li><a href="//montreal.safenetwork.org/" target="_blank">Montreal</a></li>
            <li><a href="//www.meetup.com/Project-SAFE-San-Francisco/" target="_blank">San Francisco</a></li>
            <li><a href="//www.meetup.com/Sydney-Project-SAFE/" target="_blank">Sydney</a></li>
          </ul>
          <p className="p">
            Alternatively, if there is no meet up in your area, or you would like to set up your own please contact:&nbsp;
    <a href="mailto:outreach@maidsafe.net">outreach@maidsafe.net</a>.
  </p>
        </div>
        <div id="Location" className="location map">
          {/* <MyMapComponent isMarkerShown googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC6T_i5NuXGIOUjJQsWbMwqZH45mjcSnaU"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />} /> */}
        </div>
        <div className="location img">
          <img src={MapLocationSmall} alt="Maidsafe Map" />
        </div>
        <div className="content-3">
          <h3 className="title">Postal Address</h3>
          <p className="p">
            MaidSafe.net Limited<br />
            6 Forbes Drive<br />
            Ayr<br />
            Scotland<br />
            KA8 9FG<br /><br />
          </p>
          <ul className="list">
            <li>
              <a
                href="https://www.google.com/maps/place/maidsafe.net+limited/@55.4810467,-4.6087618,519m/data=!3m2!1e3!4b1!4m5!3m4!1s0x4889d19859546c0f:0x8d053fd88e589089!8m2!3d55.4810467!4d-4.6065731?hl=en"
                target="_blank">Locate us on Google Maps</a></li>
          </ul>
          <p className="p">
            Tel: <a href="tel:+44 (0) 1292317311">+44 (0) 1292317311</a><br />
            Email: <a href="mailto:info@maidsafe.net">info@maidsafe.net</a><br />
            Company Registered in Scotland<br />
            No. SC297540
  </p>
        </div>
      </div>
    );
  }
}

export default withSiteData(() => (
  Base(Contact, CONST.meta.contact, CONST.nav.CONTACT)
));
