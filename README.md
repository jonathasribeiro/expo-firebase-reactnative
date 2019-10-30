# Projeto Expo/React-Native/Firebase

## Sobre o Projeto

O projeto consiste numa aplicação usando Expo/React-Native com a conexão do Firebase para Autenticação e Busca de Dados no Banco de Dados

## Configurações

Para iniciar o Projeto Primeiramente rode em seu terminal o comando `Yarn` e depois `Expo Start`;

### Configurações Firebase

No Arquivo `App.js` mude os dados para acesso ao Firebase

```
const config = {
      apiKey: "AIzaSyAgg_yDXt1Qoutu7hcOdXXOrFhiVBHjWeE",
      authDomain: "start-cbaa5.firebaseapp.com",
      databaseURL: "https://start-cbaa5.firebaseio.com",
      projectId: "start-cbaa5",
      storageBucket: "start-cbaa5.appspot.com",
      messagingSenderId: "633975796254",
      appId: "1:633975796254:web:c575d3fe2edca55338740f",
      measurementId: "G-99DF5G1L1G"
    };
```

O cadastro dos dados de progresso no Firebase foi feito da seguinte forma:

![](/assets/images/firebase.png)

No Arquivo `src/pages/Dashboard/index.js` o acesso aos dados do Banco de Dados ficou da seguinte forma:

```
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
```
