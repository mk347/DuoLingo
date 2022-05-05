import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  word: {
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 15,
    borderColor: 'lightgray',
    borderBottomWidth: 4,
    marginRight: 5,
  },
  wordSelected: {
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 15,
    borderColor: 'lightgray',
    borderBottomWidth: 4,
    marginRight: 5,
    backgroundColor: '#9c9c9c',
    color: 'white'
  },
  text: {
    fontSize: 20,
    padding: 15,
    color: 'black'
  },
  textSelected: {
    color: 'white'
  }
})

export default styles;