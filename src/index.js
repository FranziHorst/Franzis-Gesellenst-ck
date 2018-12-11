import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase'
import { applyMiddleware, compose, createStore } from 'redux'
import { getFirestore, reduxFirestore } from 'redux-firestore'
import thunk from 'redux-thunk'
import App from './App'
import GlobalStyle from './components/projects/GlobalStyle'
import fbConfig from './config/fbConfig'
import './index.css'
import * as serviceWorker from './serviceWorker'
import rootReducer from './store/reducers/rootReducer'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(
      { ...fbConfig, logErrors: false },
      {
        userProfile: 'users',
        useFirestoreForProfile: true,
        attachAuthIsReady: true,
        logErrors: false
      }
    ),
    reduxFirestore(fbConfig)
  )
)

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <React.Fragment>
        <App />
        <GlobalStyle />
      </React.Fragment>
    </Provider>,
    document.getElementById('root')
  )
  serviceWorker.register()
})
