import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Button,
    View,
    Text,
    StatusBar,
  } from 'react-native';
  import { connect } from 'react-redux';
class Car extends React.Component{
    constructor(props){
        super(props)
       }
    /**
     * 点击
     */
    Btnclick(){
        console.log(this.props)
       
    }
    render(){
        return (
             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>{this.props.store.mapType}</Text>
            </View>
        ) 
    }
}
export default connect((store)=>{
  return {store:store.login}
})(Car)