// ReactDOM.render(
//   <React.Fragment>
//     <App />
//     <GlobalStyle />
//   </React.Fragment>,
//   document.getElementById('root')
// )

// serviceWorker.register()

// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import App from './App'
import GlobalStyle from './components/projects/GlobalStyle'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import fbConfig from './config/fbConfig'
import './index.css'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(fbConfig, {
      userProfile: 'users',
      useFirestoreForProfile: true,
      attachAuthIsReady: true
    }),
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
