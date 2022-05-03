import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-start'
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',

    margin: 10,
    marginBottom: 0,
  },
  mascot: {
      width: '30%',
      aspectRatio: 3/4,
      marginRight: 10
  },
  sentenceContainer: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    padding: 10,
  },
  sentence: {
    fontSize: 16,
  },
  textInputContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'lightgray',
    padding: 15,
    backgroundColor: '#ebebeb',
  },
  textInput: {
    fontSize: 30
  }
})

export default styles;