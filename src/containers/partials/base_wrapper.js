// Copyright 2020 MaidSafe.net limited.
//
// This SAFE Network Software is licensed to you under the MIT license <LICENSE-MIT
// http://opensource.org/licenses/MIT> or the Modified BSD license <LICENSE-BSD
// https://opensource.org/licenses/BSD-3-Clause>, at your option. This file may not be copied,
// modified, or distributed except according to those terms. Please review the Licences for the
// specific language governing permissions and limitations relating to use of the SAFE Network
// Software.

import React from 'react';
import {Head} from 'react-static';
//
import Header from './header';
import Footer from './footer';

export default function BaseWrapper(WrappedComponent, meta, page) {

  class Wrapper extends React.Component {
    render() {
      return (
        <main>
          {
            meta ? (
              <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.desc} />
              </Head>
            ) : null
          }
          <Header page={page} />
          <WrappedComponent />
          <Footer />
        </main>
      )
    }
  }

  return <Wrapper />;
}
