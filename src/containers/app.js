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
