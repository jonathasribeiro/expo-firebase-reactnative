import React, { Component } from "react";

import {
  Text,
  StyleSheet,
  StatusBar,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import * as firebase from "firebase";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    padding: 20
  },
  input: {
    height: 45,
    backgroundColor: "#fff",
    alignSelf: "stretch",
    borderColor: "#eee",
    borderWidth: 1,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 25
  },
  button: {
    height: 45,
    marginTop: 10,
    backgroundColor: "#7159c1",
    alignSelf: "stretch",
    paddingHorizontal: 20,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold"
  },
  loading: {
    flexDirection: "row"
  }
});

export default class Main extends Component {
  state = {
    email: "",
    password: "",
    auth: false,
    isAuthenticated: false,
    loading: false,
    login: false
  };

  login = async () => {
    this.setState({ loading: true });
    const { email, password } = this.state;
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        this.setState({ isAuthenticated: true, loading: false });
        this.props.navigation.navigate("Dashboard");
      })
      .catch(err => {
        this.setState({ auth: true, loading: false });
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite seu Senha"
          secureTextEntry={true}
          password={true}
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />

        <TouchableOpacity style={styles.button} onPress={this.login}>
          {this.state.loading ? (
            <View style={styles.loading}>
              <Text style={styles.buttonText}>Carregando </Text>
              <ActivityIndicator color="#fff" />
            </View>
          ) : (
            <Text style={styles.buttonText}>Logar</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate("Home");
          }}
        >
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>

        {this.state.isAuthenticated ? (
          <Text style={styles.buttonText}>Você está Logado</Text>
        ) : this.state.auth ? (
          <Text style={styles.buttonText}>Falha na Autenticação</Text>
        ) : null}
      </View>
    );
  }
}
