import React, {Component} from 'react';
import { Container, View, Title, Content, Button, Left, Body, Text, Form, Label, Right, Spinner} from 'native-base';


export default class Login extends Component{

    static navigationOptions = {
        title: "OurControl"
    }

    state = {
        currentTime: null
    }

    componentDidMount() {
          this.setState({
            curTime : new Date().getTime().toLocaleString()
          })
      }

    render() {
    
        return (
            <Container 
                style={{flex:1,
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'center',}}>
            <Content contentContainerStyle={{justifyContent:'center', margin: 20}}>
              <Form style={{justifyContent:'center', margin: 20}}>
                  <Label>Olá, Bem vindo a <Text style={{fontSize: 18, fontStyle: "bold"}}>Jambu Tecnologia,</Text></Label>
                  <Label>realize aqui o seu checkin!</Label> 
              </Form>
              <View style = {{height:10}} />
              <View>
                    <Text>{this.state.curTime}</Text>
             </View>
              <View style = {{height:10}} />
              <Button block success title="Checkin" >
                <Text> Checkin </Text>
              </Button>
            </Content>
          </Container>
        );
    }

}
