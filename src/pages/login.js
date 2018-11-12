import React, {Component} from 'react';
import {AsyncStorage, Alert, Image} from 'react-native';
import { View, Container, Content, Input, Item, Button, Text, Form, Label } from 'native-base';
import api from '../services/api'

export default class Login extends Component{

    static navigationOptions = {
        title: "OurControl"
    }

    state = {
        errorMessage: null,
        login: null,
        password: null
    }

    signIn = async () => {

        try{

            const response = await api.post('/login.json', {
                login: this.state.login,
                password: this.state.password
            });

            if(response.data.token){

                await AsyncStorage.multiSet([
                    ['@Api:token', response.data.token],
                    ['@Api:checkin', JSON.stringify(response.data.checkin)]
                ]); 
                
                    Alert.alert('Login realizado com sucesso!');
                    this.props.navigation.navigate("Checkin");

            }else if(response.data.status === 'unauthorized'){
                Alert.alert('Opa! Não foi possível acessar, verifique seu login e senha!');
            }else{
                Alert.alert('Conecte-se à rede da Jambu e tente novamente!');
            }

        } catch (response){
            this.setState({errorMessage : response.data.error});
        }
    }   

    render() { 
    
        return (
        <Container >
            <Content>
              <Form>
                <Item floatingLabel last>
                    <Label>Usuário</Label>
                    <Input name='login' onChangeText={(text)=>{this.setState({login: text})}}/>
                </Item>
                <Item floatingLabel last>
                    <Label>Senha</Label>
                    <Input name='password' onChangeText={(text)=>{ this.setState({password: text})}} secureTextEntry/>
                </Item>
             </Form>
             <View style={{marginTop: 40, justifyContent: "center"}}>
            <Button rounded block success onPress={this.signIn} >
                <Text>Entrar</Text>
            </Button>
            </View>
              
              </Content>
            </Container>
          );
    }

}
