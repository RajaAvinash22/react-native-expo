import React from 'react';
import { StyleSheet,View } from 'react-native';
import { TextInput,Appbar,Button} from 'react-native-paper';
import DisplayFrindship from './components/DisplayCompoFriend'
class App extends React.Component {
  state = {
    fname: "",
    sname: ""
  }

  submitIt(){
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.name}`
    ,{
      headers:{
      "x-rapidapi-host": "love-calculator.p.rapidapi.com",
    "x-rapidapi-key": "316f06d177msh4df7f197b6e013dp189191jsn0561a956cf03"

    }
  })
    .then(data=>data.json())
    .then(data2=>{
      console.log(data2)
    })
  }
  render() {

    return (
      <View style={styles.container}>
        <Appbar.Header>

          <Appbar.Content
            title="Friendship % Calculator"
            style={{alignItems:"center"}}
          />

        </Appbar.Header>
        <TextInput
          label='person1'
          value={this.state.fname}
          onChangeText={text => this.setState({ text })}
        />
        <TextInput
          label='person2'
          value={this.state.sname}
          onChangeText={text => this.setState({ text })}
        />
        <Button  mode="contained" 
        style={{margin:10}}
        onPress={() => this.submitIt()}>
          Calculate
        </Button>
        <DisplayFrindship />
      </View>
    );
  }

}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 28,
    backgroundColor: '#fff',

  },
});
