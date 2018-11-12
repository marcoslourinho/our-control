import React, {Component} from 'react';
import {AsyncStorage, Alert, Image} from 'react-native';
import { Container, View, Content, Button, Text, Form, Label, Input, Item} from 'native-base';
import api from '../services/api'

export default class Login extends Component{

    static navigationOptions = {
        title: "OurControl"
    }

   state = {
        errorMessage: null,
        checkin: null,
        token: null,
        task: null,
    }

    checkin = async () => {

        try{
            let request = {}
        
            if(this.state.checkin){
                request = {
                    token: this.state.token,
                    task: this.state.task }   
            }else{
                request = { token: this.state.token}  
            }

            const response = await api.post('/token', request );
 
            const checkin = response.data.checkin;
            this.setState({checkin : checkin});

            await AsyncStorage.setItem('@Api:checkin', JSON.stringify(this.state.checkin));

            if(this.state.checkin){
                Alert.alert('Checkin realizado com sucesso!');
            }else{
                Alert.alert('Checkout realizado com sucesso!');
            }

        } catch (response){
            this.setState({errorMessage : response.data.error});
        }
    }   

   async componentWillMount(){
      const token = await AsyncStorage.getItem('@Api:token');
      const checkin = await AsyncStorage.getItem('@Api:checkin');

      if(checkin != null)
          this.setState({checkin: JSON.parse(checkin)});
    
      if(token)
          this.setState({token: token});
     
    }

    render() {
        if(this.state.checkin){

        return (
            <Container 
                    style={{flex:1,
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'center',}}>

                <Content contentContainerStyle={{justifyContent:'center', margin: 20}}>
                  <Form style={{justifyContent:'center', alignItems: 'center'}}>
                      <Image source={require('./img/checkout.png')}  style={{ width: 80, height: 80}} />
                      <View style = {{height:15}} />
                      <Label><Text style={{fontSize: 20}}>Olá, terminamos por hoje ?</Text></Label>
                      <Label>realize aqui o seu checkout!</Label> 
                      <View style = {{height:10}} />
                      <Item floatingLabel last>
                        <Label>Tarefas Realizadas</Label>
                        <Input name='task' onChangeText={(text)=>{this.setState({task: text})}} />
                      </Item>
                  </Form>
                  <View style = {{height:10}} />
                  <Button block success title="Checkout" onPress={this.checkin} >
                    <Text> Checkout </Text>
                  </Button>
                </Content>
            </Container> );

          } else {

        return (
             <Container 
                style={{flex:1,
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'center',}}>

            <Content contentContainerStyle={{justifyContent:'center', margin: 20}}>
              <Form style={{justifyContent:'center', alignItems: 'center'}}>
                 <Image source={require('./img/checkin.png')}  style={{ width: 80, height: 80}} />
                 <View style = {{height:15}} />
                  <Label>Olá, Bem vindo a <Text style={{fontSize: 20}}>Jambu Tecnologia,</Text></Label>
                  <Label>realize aqui o seu checkin!</Label> 
              </Form>
              <View style = {{height:10}} />
              <View style = {{height:10}} />
              <Button block success title="Checkin" onPress={this.checkin} >
                <Text> Checkin </Text>
              </Button>
            </Content>
          </Container>
             );
          }
       
    }

}
