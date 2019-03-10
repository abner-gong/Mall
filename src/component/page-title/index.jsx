/*
* @Author: He Gong
* @Date:   2019-02-13 11:27:21
* @Last Modified by:   He Gong
* @Last Modified time: 2019-03-10 14:02:20
*/  
import React from 'react';

class PageTitle extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        document.title = this.props.title + ' - HAPPY MMALL';
    }
    render(){
        return (
            <div className="row">
                <div className="col-md-12">
                    <h1 className="page-header">{this.props.title}</h1>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default PageTitle;