import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Footer from '../common/footer-component/footer-component';
import Menu from '../common/Menu';
import TestStats from '../common/TestStats';

export default class Stats extends Component {
  render() {
    if (localStorage.currentUser === "") {
      return (
        <Redirect to="/" />
      )
    }

    return (
      <div className="ordinaryPages stats">
        <Menu />
        <div className="ordinaryContainer">
          <h1>Статистика</h1>
          <TestStats />
          <div className="footer-container">
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}