import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import Login from './components/loginLayout.jsx'
// import { Provider } from 'react-redux'
// import store from './redux/store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
  <App />
  </BrowserRouter>,

    {/* <Provider store={store}> */},
    {/* </Provider> */}
  
)
