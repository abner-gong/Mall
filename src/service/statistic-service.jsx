/*
* @Author: He Gong
* @Date:   2019-02-13 11:27:21
* @Last Modified by:   He Gong
* @Last Modified time: 2019-03-10 14:02:20
*/  
import MUtil        from 'util/mm.jsx'

const _mm   = new MUtil();

class Statistic{
    // 首页数据统计
    getHomeCount(){
        return _mm.request({
            url: '/manage/statistic/base_count.do'
        });
    }
}

export default Statistic;