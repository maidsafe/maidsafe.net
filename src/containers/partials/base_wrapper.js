import React from 'react';
import Header from './header';
import Footer from './footer';

export default function BaseWrapper(WrappedComponent) {
  class Wrapper extends React.Component {
    render() {
      return (
        <main>
          <Header />
          <WrappedComponent />
          <Footer />
        </main>
      )
    }
  }

  return <Wrapper />;
}
