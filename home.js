
import React from 'react';
import {
    SafeAreaView,
    Alert,
    Button,
    View,
    Text,
    StatusBar,
} from 'react-native';
class Home extends React.Component {
      constructor(props) {
        super(props)
          this.state = {
              text: 'true'
          }
      }
     
     Tokenclick() {
         // this.props.navigation.navigate('Settings')
         // this.props.dispatch(getToken())
         // console.log(getToken())
         this.setState({
             text: 'false'
         })
         fetch('http://test.cvtsp.com/api/login?enterpriseCode=111111111&account=admin&password=18f4f4d01f8ec4393a12e25521980cb26ad0484783ec6fdc431cc51a8aed71e5385bd22e691736cc504df19a10e6296487d6bd0f2be9e4215a910690162530b8&language=zh_CN').then(res => {
              Alert.alert('ooo1')
                 console.log(this)
                 this.setState({
                     text: 'fetch'
                 })
                 return res.json()
             }).then(data => {
                 Alert.alert('ooo2')
                 this.setState({
                     text: data.data.mapType
                 })
             })
             .catch((error) => {
                  Alert.alert('ooo3')
                 this.setState({
                     text: JSON.stringify(error)
                 })
             });
     }
   render(){
        return (
            <View>  
            <Text> {this.state.text} </Text>
            <Text>Home</Text>
             < Button
             title = "Details2"
             onPress = {
                 this.Tokenclick.bind(this)
             }
             />
             < Button
             title = "Details2"
             onPress = {
                 this.Tokenclick.bind(this)
             }
             />
          
          </View>)
    }
     
}


export default Home