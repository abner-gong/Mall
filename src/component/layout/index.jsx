/*
* @Author: He Gong
* @Date:   2019-02-13 11:27:21
* @Last Modified by:   He Gong
* @Last Modified time: 2019-03-10 14:02:20
*/  
import React from 'react';

import NavTop from 'component/nav-top/index.jsx';
import NavSide from 'component/nav-side/index.jsx';

import './theme.css';
import './index.scss';

class Layout extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div id="wrapper">
                <NavTop />
                <NavSide />
                {this.props.children}
            </div>
        );
    }
}

export default Layout;