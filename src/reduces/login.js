import * as TYPE from '../type'

/**
 * 这里可以初始化一个默认的实体类
 */
const initialState = {
    token : '',
    userInfo:{},
    mapType:'vvv'
  }

export default  function login (state=initialState,action){
    switch (action.type) {
          case TYPE.GETTOKEN: // 初始状态
                state=action.data
                // alert(JSON.stringify(state),'o')
             return state
              case TYPE.CHANGE: // 初始状态
              return {
                  ...state
              };
          default:
              return state;
  }
}
