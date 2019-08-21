import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Picker,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BMI from './components/BMI.js';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      region: 'asian',
      weight: '',
      height: '',
      bmi: '',
    };
  }

btnPress()
{
    const bmi = new BMI();
    let w = Number(this.state.weight);
    let h = Number(this.state.height);
    const b = bmi.bmiCalculate(w,h);
    let check = "";
    
    if(this.state.region == "asian"){
      if(b <= 18.5){
        check = "Under weight";
      }else if(b <= 24.5){
        check = "Normal weight";
      }else if(b <= 29.9){
        check = "Overweight";
      }else if(b >29.9){
        check = "Obesity";
      }
    }else{
      if(b <= 28.5){
        check = "Under weight";
      }else if(b <= 34.5){
        check = "Normal weight";
      }else if(b <= 39.9){
        check = "Overweight";
      }else if(b >39.9){
        check = "Obesity";
      }
    }
    Alert.alert(check+"\n"+b.toString());
  }

  render() {
    return (
      <LinearGradient
        colors={['#7F7FD5', '#86A8E7', '#91EAE4']}
        style={{ flex: 1 }}>
        <View style={{ flex: 1, marginTop: 50 }}>
          <Text style={styles.txt}>BMI Calculator </Text>
          <TextInput
            style={styles.txtIn2}
            placeholder="Weight"
            onChangeText={text => this.setState({weight: text})}
          />

          <TextInput
            style={styles.txtIn2}
            placeholder="Height"
            onChangeText={text => this.setState({height: text})}
          />


            <Picker
              selectedValue={this.state.region}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) => this.setState({ region: itemValue })}>
              <Picker.Item label="Asia" value="AS" />
              <Picker.Item label="Western" value="WU" />
            </Picker>


          <TouchableOpacity style={styles.viewBtn}>
            <Text
              style={styles.txt}
              onPress={() => this.btnPress()}>
              OK
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  txtIn2: {
    alignItems: 'center',
    height: 40,
    backgroundColor: 'white',
    padding: 10,
    margin: 5,
    marginLeft : 10,
    marginEnd : 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  viewBtn: {
    height: 40,
    backgroundColor: 'white',
    margin: 10,
    borderColor: 'black',
    borderWidth: 1,
  },

  picker: {
    height:40,
    backgroundColor: 'white',
    padding: 10,
    margin: 5,
    marginLeft : 10,
    marginEnd : 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  txt:{
    textAlign: 'center',
    fontSize: 20,
    color: '#000000'
  }
});
