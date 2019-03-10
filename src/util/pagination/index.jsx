/*
* @Author: He Gong
* @Date:   2019-02-13 11:27:21
* @Last Modified by:   He Gong
* @Last Modified time: 2019-03-10 14:02:20
*/  
import React        from 'react';
import RcPagination   from 'rc-pagination';
import 'rc-pagination/dist/rc-pagination.min.css';

// 通用分页组件
class Pagination extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="row">
                <div className="col-md-12">
                    <RcPagination {...this.props} 
                        hideOnSinglePage
                        showQuickJumper/>
                </div>
            </div>
        );
    }
}

export default Pagination;