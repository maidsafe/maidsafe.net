// Copyright 2020 MaidSafe.net limited.
//
// This SAFE Network Software is licensed to you under the MIT license <LICENSE-MIT
// http://opensource.org/licenses/MIT> or the Modified BSD license <LICENSE-BSD
// https://opensource.org/licenses/BSD-3-Clause>, at your option. This file may not be copied,
// modified, or distributed except according to those terms. Please review the Licences for the
// specific language governing permissions and limitations relating to use of the SAFE Network
// Software.

import React from 'react';
import { withSiteData } from 'react-static'
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
// import OpenLayers from '../OpenLayers';
//
import CONST from '../constants';
import Base from './partials/base_wrapper';
import MapLocationSmall from '../../public/_temp/img/maps_bg_small.png'
class Contact extends React.Component {
  // constructor() {
  //   super();
  //   this.map = {
  //     lat: 55.4810467, lng: -4.6065731
  //   };
  // }

  // componentDidMount() {
  //   const map = new OpenLayers.Map(`Location`);
  //   const mapnik         = new OpenLayers.Layer.OSM();
  //   const fromProjection = new OpenLayers.Projection("EPSG:4326");   // Transform from WGS 1984
  //   const toProjection   = new OpenLayers.Projection("EPSG:900913"); // to Spherical Mercator Projection
  //   const position       = new OpenLayers.LonLat(this.map.lng, this.map.lat).transform( fromProjection, toProjection);
  //   const zoom           = 16;
  //   map.addLayer(mapnik);

  //   const markers = new OpenLayers.Layer.Markers( "Markers" );

  //   map.addLayer(markers);
  //   markers.addMarker(new OpenLayers.Marker(position));
  //   map.setCenter(position, zoom);
  // }

  render() {
    // const myLatLng = { lat: 55.4810467, lng: -4.6065731 };

    // const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    //   <GoogleMap
    //     defaultZoom={18}
    //     defaultCenter={myLatLng}
    //   >
    //     {props.isMarkerShown && <Marker position={myLatLng} />}
    //   </GoogleMap>
    // ));

    return (
      <div className="contact">
        <div className="content-1">
          <h3>Contact MaidSafe</h3>
        </div>
        <div className="content-3">
          <h3 className="title">Technical Enquiries</h3>
          <p className="p">
            If have questions regarding code contributions, or would like to get in
    touch with our development team please use one of the following methods:
  </p>
          <div className="btn-list">
            <a className="al-btn invert" href="https://github.com/maidsafe" target="_blank">
              <span className="icn github"></span>GitHub
    </a>
            <a className="al-btn invert" href="https://forum.safedev.org/" target="_blank">
              <span className="icn forum"></span>Dev Forum
    </a>
          </div>
        </div>
        <div className="content-3">
          <h3 className="title">Community Support</h3>
          <p className="p">
            If you are seeking support with SAFE Network testnets, or have questions about where and how to acquire MaidSafeCoin, you can browse and raise a support thread on the community forum in the <a href="https://safenetforum.org/c/support" target="_blank">Support</a> category.
  </p>
        </div>
        <div className="content-3">
          <h3 className="title">Business and Press Enquiries</h3>
          <p className="p">
            Anyone seeking further information about business partnerships, or press interviews should email us at: <a
              href="mailto:pr@maidsafe.net">pr@maidsafe.net</a>.
  </p>
        </div>
        <div className="content-3">
          <h3 className="title">Events</h3>
          <p className="p">
            See <a href="https://safenetforum.org/t/safe-network-upcoming-events/29029">this forum post</a> for a list of all the upcoming events that either the MaidSafe team are attending or the community are running. If you would like to get involved in hosting an event, please post on the community forum in the <a href="https://safenetforum.org/c/community/events" target="_blank">Community/Events</a> category.
  </p>
        </div>
        {/* <div id="Location" className="location map">
          <MyMapComponent isMarkerShown googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC6T_i5NuXGIOUjJQsWbMwqZH45mjcSnaU"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />} />
        </div>
        <div className="location img">
          <img src={MapLocationSmall} alt="Maidsafe Map" />
        </div> */}
        <div className="content-3">
          <h3 className="title">Registered Address</h3>
          <p className="p">
            MaidSafe.net Limited<br />
            163 Bath Street<br />
            Glasgow<br />
            Scotland<br />
            G2 4SQ<br />
          </p>
          <ul className="list">
            <li>
              <a
                href="https://www.google.com/maps/place/163+Bath+St,+Glasgow+G2+4SQ/@55.86427,-4.2637013,820m/data=!3m2!1e3!4b1!4m5!3m4!1s0x488844273ccfbc6d:0x10ecd080a822f389!8m2!3d55.864267!4d-4.2615126?hl=en"
                target="_blank">Locate us on Google Maps</a></li>
          </ul>
          <p className="p">
            Tel: <a href="tel:+44 (0) 1292317311">+44 (0) 1292317311</a><br />
            Email: <a href="mailto:outreach@maidsafe.net">outreach@maidsafe.net</a><br />
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
