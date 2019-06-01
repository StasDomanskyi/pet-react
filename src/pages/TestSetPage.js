import React, { Component } from 'react';
import TestSetArea from '../components/TestSetArea';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import attandance from '../images/attendance.png';
 
export default class TestSet extends Component {
    render() {
        return (
            <div className="testSet">
                <Menu />
                <div>
                    <h1 className='testudy'>Testudy</h1>
                    {/* <img src={attandance} alt="little logo"  /> */}
                    <TestSetArea />
                    <div className="footer-container">
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}