import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from './styles'; 
import { fetchUsuario } from '../../api/api'

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [usuarioValido, setUsuarioValido] = useState('');

  const resolverUsuario = (users) => {
    result = users.find(user => user.email === email && user.password === senha)
    result === undefined && setUsuarioValido('Usuário ou senha invalido !')
    result != undefined && navigation.navigate('Tarefas')
    setTimeout(() => setUsuarioValido(''), 3000);
  }

const Logar = () => fetchUsuario()
   .then(resultado => resultado.json())
   .then(resultado => resolverUsuario(resultado))

const Cadastrar = () => navigation.navigate('Cadastro')

  return (
    <View style={styles.container}>
      <Image style={{width:100, height: 100}} source={require('../../assets/pomodoro.png')}/>
      <Text style={styles.title}>Login</Text>
      <TextInput placeholder= "E-mail" style={styles.input} onChangeText={text=>setEmail(text)} />
      <TextInput secureTextEntry={true} placeholder= "Senha" style={styles.input} onChangeText={text=>setSenha(text)} />
      <TouchableOpacity style={styles.buttonLogin} onPress={()=>Logar()}>
        <Text style={{color:'white', textAlign: 'center'}}> Login </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{margin:'10px'}} onPress={()=>Cadastrar()}>
        <Text style={{color:'black', textAlign: 'center'}}> Faça cadastro para continuar </Text>
      </TouchableOpacity>
        <TouchableOpacity style={{margin:'0px'}} onPress={()=>Cadastrar()}>
        <Text style={{color:'red', textAlign: 'center'}}> {usuarioValido} </Text>
      </TouchableOpacity>
    </View>
  );
}

