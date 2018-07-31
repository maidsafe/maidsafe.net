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
