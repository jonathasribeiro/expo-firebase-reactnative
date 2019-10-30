import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import * as Progress from "react-native-progress";
import firebase from "firebase";

import { createAppContainer } from "react-navigation";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    padding: 20
  },
  progress: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 300
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
  progressText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 10
  },
  progressNumbers: {
    color: "#FFF",
    fontWeight: "bold",
    marginTop: 10
  },
  loading: {
    flexDirection: "row"
  },
  box: {
    width: 380,
    marginTop: 10,
    height: 100,
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#1a1a1a"
  },
  textBox: {
    color: "#eee",
    fontWeight: "bold"
  },
  title: {
    color: "#eee",
    fontWeight: "bold",
    fontSize: 25
  },
  textMoney: {
    color: "#4285F4",
    fontWeight: "bold",
    fontSize: 30
  },
  textMoneyRed: {
    color: "#e63a2e",
    fontWeight: "bold",
    fontSize: 30
  },
  dash: {
    width: 380,
    height: 500
  },
  info: {
    marginTop: 10,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  value: {
    color: "#e63a2e",
    fontWeight: "bold"
  }
});

class App extends Component {
  render() {
    return <AppContainer />;
  }
}
export default App;

class Clientes extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Saldo no mês de Outubro</Text>
        <View style={styles.box}>
          <Text style={styles.textBox}>Jonathas Ribeiro</Text>
          <Text style={styles.textMoney}>+ R$ 750,00</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.textBox}>João da Silva</Text>
          <Text style={styles.textMoney}>+ R$ 890,50</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.textBox}>Ana Souza</Text>
          <Text style={styles.textMoney}>+ R$ 235,50</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.textBox}>Caio Silva</Text>
          <Text style={styles.textMoneyRed}>- R$ 150,00</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.textBox}>Paulo Henrique</Text>
          <Text style={styles.textMoney}>+ R$ 375,90</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.textBox}>Fernanda Pires</Text>
          <Text style={styles.textMoneyRed}>- R$ 230,40</Text>
        </View>
      </View>
    );
  }
}

class Resumo extends Component {
  constructor() {
    super();

    this.state = {
      progress: 0
    };

    this.database = firebase
      .database()
      .ref()
      .child("progress");
  }

  componentDidMount() {
    this.database.on("value", snap => {
      this.setState({
        progress: snap.val()
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.progressText}>Progresso Atual</Text>
        <Progress.Bar
          progress={this.state.progress / 100}
          width={300}
          height={80}
          color="#7159c1"
          borderColor="#fff"
        />
        <View style={styles.progress}>
          <Text style={styles.progressNumbers}>0%</Text>
          <Text style={styles.progressNumbers}>100%</Text>
        </View>
      </View>
    );
  }
}

class Historico extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Balanço do Mês de Outubro</Text>
        <View style={styles.box}>
          <Text style={styles.textBox}>Jonathas Ribeiro</Text>
          <Text style={styles.textMoney}>+ R$ 750,00</Text>
        </View>
        <View style={styles.dash}>
          <View style={styles.info}>
            <Text style={styles.textBox}>Compra Supermercado</Text>
            <Text style={styles.value}>R$ 250,00</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.textBox}>Lojas Renner</Text>
            <Text style={styles.value}>R$ 350,00</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.textBox}>Macbook Pro 15 2015</Text>
            <Text style={styles.value}>R$ 6750,00</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.textBox}>Fone de Ouvido Beats</Text>
            <Text style={styles.value}>R$ 2250,00</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.textBox}>Chuteira Adidas</Text>
            <Text style={styles.value}>R$ 450,00</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.textBox}>Fifa 2020</Text>
            <Text style={styles.value}>R$ 200,00</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.textBox}>Monitor Ultra Wide</Text>
            <Text style={styles.value}>R$ 650,00</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.textBox}>Teclado RGB</Text>
            <Text style={styles.value}>R$ 270,00</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.textBox}>Spotify</Text>
            <Text style={styles.value}>R$ 17,90</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.textBox}>MeuSucesso.com</Text>
            <Text style={styles.value}>R$ 79,00</Text>
          </View>
        </View>
      </View>
    );
  }
}

const mainNavigation = createMaterialBottomTabNavigator(
  {
    Clientes: {
      screen: Clientes,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Icon name="user" size={20} color={focused ? "#fff" : "#ddd"} />
        )
      })
    },
    Resumo: {
      screen: Resumo,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Icon name="bar-chart" size={20} color={focused ? "#fff" : "#ddd"} />
        )
      })
    },
    Historico: {
      screen: Historico,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Icon name="calendar" size={20} color={focused ? "#fff" : "#ddd"} />
        )
      })
    }
  },
  {
    barStyle: {
      backgroundColor: "#7159c1"
    }
  }
);

const AppContainer = createAppContainer(mainNavigation);
