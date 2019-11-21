import React from 'react'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import CompressionPlugin from 'compression-webpack-plugin'

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
  plugins: ['react-static-plugin-react-router', 'react-static-plugin-sass'],
  webpack: (config, { defaultLoaders, stage }) => {
    let loaders = []

    if (stage === 'dev') {
      loaders = [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }]
    } else {
      loaders = [
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            minimize: stage === 'prod',
            sourceMap: false,
          },
        },
        {
          loader: 'sass-loader',
          options: { includePaths: ['src/'] },
        },
      ]

      // Don't extract css to file during node build process
      if (stage !== 'node') {
        loaders = ExtractTextPlugin.extract({
          fallback: {
            loader: 'style-loader',
            options: {
              sourceMap: false,
              hmr: false,
            },
          },
          use: loaders,
        })
      }
    }

    config.module.rules = [
      {
        oneOf: [
          {
            test: /\.s(a|c)ss$/,
            use: loaders,
          },
          defaultLoaders.cssLoader,
          defaultLoaders.jsLoader,
          defaultLoaders.fileLoader,
        ],
      },
    ]

    config.plugins.push(new CompressionPlugin({
      algorithm: 'gzip'
    }))
    return config
  },
  Document: ({ Html, Head, Body, children, siteData, renderMeta }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="shortcut icon" type="image/icon" href="/favicon.ico" />
        <title>Maidsafe.net</title>
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
}
