// Copyright 2020 MaidSafe.net limited.
//
// This SAFE Network Software is licensed to you under the MIT license <LICENSE-MIT
// http://opensource.org/licenses/MIT> or the Modified BSD license <LICENSE-BSD
// https://opensource.org/licenses/BSD-3-Clause>, at your option. This file may not be copied,
// modified, or distributed except according to those terms. Please review the Licences for the
// specific language governing permissions and limitations relating to use of the SAFE Network
// Software.

import React from 'react'

export default {
  getSiteData: () => ({
    title: 'MaidSafe.net',
  }),
  getRoutes: async () => {
    return [
      {
        path: '/',
        template: 'src/containers/home',
      },
      {
        path: '/about_us',
        template: 'src/containers/about',
      },
      {
        path: '/careers',
        template: 'src/containers/careers',
      },
      {
        path: '/contact',
        template: 'src/containers/contact',
      },
      {
        path: '/cookies',
        template: 'src/containers/cookies',
      },
      {
        path: '/privacy',
        template: 'src/containers/privacy',
      },
      {
        path: '/disclaimer',
        template: 'src/containers/disclaimer',
      },
      {
        path: '/credits',
        template: 'src/containers/credits',
      },
      {
        path: '404',
        template: 'src/containers/404',
      },
    ]
  },
  plugins: ['react-static-plugin-react-router', 'react-static-plugin-sass', 'ie11-polyfills-plugin'],
  Document: ({ Html, Head, Body, children, siteData, renderMeta }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="shortcut icon" type="image/icon" href="/favicon.ico" />
        <title>MaidSafe.net</title>
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  babelExcludes: [/core-js/]
}
