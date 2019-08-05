import React from 'react';
import { connect } from 'react-redux';
import {
    SafeAreaView,
    StyleSheet,
    Button,
    View,
    Text,
    StatusBar,
  } from 'react-native';
  import {getToken} from '../actions/login' 
class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = { text: 'true' }
    }
            // componentWillMount(){
    //     this.props.dispatch(getToken())
    // }
    // componentDidUpdate(){
    //     if(this.props.store.token){
    //         this.props.navigation.navigate('car')
    //     }
    // }
    /**
     * 点击登录
     */
    Tokenclick(){
        alert('Tokenclick')
        // this.props.navigation.navigate('Settings')
        this.props.dispatch(getToken())
        // console.log(getToken())
        this.setState({
            text:'444'
        })
       
    } 
    render(){
        return (
            <View>  
            <Text>Home</Text>
            <Text>{this.props.store.mapType}</Text>
            <Text>{this.state.text}</Text>
            <Button
            title="Details2" onPress={this.Tokenclick.bind(this)}
          />
          </View>)
    }
}
export default connect((store)=>{
    return {store:store.login}
  })(Home)