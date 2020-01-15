// Copyright 2020 MaidSafe.net limited.
//
// This SAFE Network Software is licensed to you under the MIT license <LICENSE-MIT
// http://opensource.org/licenses/MIT> or the Modified BSD license <LICENSE-BSD
// https://opensource.org/licenses/BSD-3-Clause>, at your option. This file may not be copied,
// modified, or distributed except according to those terms. Please review the Licences for the
// specific language governing permissions and limitations relating to use of the SAFE Network
// Software.

import React from 'react'

export default class CareerRole extends React.Component {
  constructor() {
    super();
    this.onClickRole = this.onClickRole.bind(this);
  }

  onClickRole(id) {
    location.replace(`#${id}`)
  }

  render() {
    const { data } = this.props;
    const { title, desc, details } = data;
    const id = title ? title.toLocaleLowerCase().replace(/\W/g, '_') : ``;
    const self = this;
    return (
      <div className="list-content type-5">
        <div className="list-content-b">
          <div className="tbl-view">
            <div className="tbl-c" id={id}>
              <h3 className="title"><a onClick={e => {
                e.preventDefault();
                self.onClickRole(id);
              }} href={`#${id}`}>{title}</a></h3>
              <div className='tbl-cnt'>
              {typeof desc === 'string' ? <p className="p desc">{desc}</p> : desc.map((d, i) => (<p key={`desc-${i}`} className="p desc">{d}</p>))}
                {details && details.length > 0 ? details.map((detail, i) => (
                  <div key={`career-detail-${i}`}>
                    <h4 className="sub-title">{detail.head}</h4>
                    {detail.subHead ? (<h4 className="sub-title-i">{detail.subHead}</h4>) : null}
                    <ul className="list bullet-5">
                      {
                        detail.list ? detail.list.map((ls, j) => (
                          <li key={`details-list-${j}`}>{ls}</li>
                        )) : null
                      }
                    </ul>
                  </div>
                )) : null}
                <div className="btn-b">
                  <a href={`mailto:careers@maidsafe.net?subject=${encodeURIComponent(title)}`} className="al-btn invert">Apply for this role</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
