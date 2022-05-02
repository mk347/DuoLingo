import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: '#0f0f0f',
    alignSelf: 'stretch'
  },
  optionsContainer: {
    width: '100%',
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'space-between'
  }
});

export default styles;