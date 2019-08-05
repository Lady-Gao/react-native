
import { combineReducers } from 'redux';
import login from './login.js'
// //这里面必须要有初始数据 - 否则报错
const rootReducer = combineReducers({
   //GetWeatherReducer : GetWeatherReducer,
   login,
});


export default rootReducer;