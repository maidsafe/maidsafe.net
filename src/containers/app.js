import React from 'react'
import { Root, Routes } from 'react-static'
import { hot } from 'react-hot-loader'
//
import '../sass/main.sass';

const App = () => (
  <Root>
    <div className="root-b">
      <React.Suspense fallback={<span>Loading...</span>}>
        <Routes />
      </React.Suspense>
    </div>
  </Root>
)

export default hot(module)(App)
