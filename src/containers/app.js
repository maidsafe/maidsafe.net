// Copyright 2020 MaidSafe.net limited.
//
// This SAFE Network Software is licensed to you under the MIT license <LICENSE-MIT
// http://opensource.org/licenses/MIT> or the Modified BSD license <LICENSE-BSD
// https://opensource.org/licenses/BSD-3-Clause>, at your option. This file may not be copied,
// modified, or distributed except according to those terms. Please review the Licences for the
// specific language governing permissions and limitations relating to use of the SAFE Network
// Software.

import React, { useEffect } from 'react'
import { Root, Routes } from 'react-static'
import { useHistory } from 'react-router-dom'
import { hot } from 'react-hot-loader'
//
import '../sass/main.sass';

const ScrollRestoration = () => {
  const history = useHistory()
  useEffect(() => {
    if (history.action !== 'POP') {
      window.scrollTo(0, 0)
    }
  }, [history.location.pathname])
  return null
}

const App = () => (
  <Root>
    <React.Suspense fallback={<span>Loading...</span>}>
      <ScrollRestoration />
      <Routes />
    </React.Suspense>
  </Root>
)

export default hot(module)(App)
