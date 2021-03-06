import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import './sass/main.scss'
import Home from './pages/Home'
import Login from './pages/Login'
import TransactionsList from './pages/Transactions'
import Profile from './pages/Profile'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Error from './components/Error'
import store from './utils/store'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/transactions" element={<TransactionsList />} />
          <Route path="/404" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
