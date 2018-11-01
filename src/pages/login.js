import React, {Component} from 'react';
import { View, Container, Icon, Content, Input, Item, Button, Text, Form, Label } from 'native-base';

export default class Login extends Component{

    static navigationOptions = {
        title: "OurControl"
    }

    render() {
    
        return (
        <Container >
            <Content>
              <Form>
                <Item floatingLabel last>
                    <Label>Usuário</Label>
                    <Input name='user' />
                </Item>
                <Item floatingLabel last>
                    <Label>Senha</Label>
                    <Input name='password' secureTextEntry/>
                </Item>
             </Form>
             <View style={{marginTop: 40, justifyContent: "center"}}>
                <Button rounded block success onPress={() => {this.props.navigation.navigate("Checkin")}} >
                    <Text>Entrar</Text>
                </Button>
            </View>
              
              </Content>
            </Container>
          );
    }

}
