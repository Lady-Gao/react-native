import * as TYPE from '../type'
/**
 * 请求token
 * @param {*} params 
 */
export function getToken(params){
    return (dispatch)=>{
        fetch('http://test.cvtsp.com/api/login?enterpriseCode=111111111&account=admin&password=18f4f4d01f8ec4393a12e25521980cb26ad0484783ec6fdc431cc51a8aed71e5385bd22e691736cc504df19a10e6296487d6bd0f2be9e4215a910690162530b8&language=zh_CN').then(res=>{
        alert(JSON.stringify(res),'res ')   
        return res.json()
         }).then(data=>{
            alert(JSON.stringify(data), 'data ')
             if(data.flag){
                dispatch({
                    type:TYPE.GETTOKEN ,
                    data:data.data
                })
             }else{
                alert(JSON.stringify(data), 'data file')
             }
         })
        
    }

   
}