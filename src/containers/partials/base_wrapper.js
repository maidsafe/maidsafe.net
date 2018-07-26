import React from 'react';
import {Head} from 'react-static';
//
import Header from './header';
import Footer from './footer';

export default function BaseWrapper(WrappedComponent, meta) {
  const { title, desc } = meta;
  console.log('meta', meta)

  class Wrapper extends React.Component {
    render() {
      return (
        <main>
          {
            meta ? (
              <Head>
                <title>{title}</title>
                <meta name="description" content={desc} />
              </Head>
            ) : null
          }
          <Header />
          <WrappedComponent />
          <Footer />
        </main>
      )
    }
  }

  return <Wrapper />;
}
