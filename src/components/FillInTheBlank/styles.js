import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    letterSpacing: 1,
    fontWeight: 'bold',
    paddingTop: 20,
    alignSelf: 'stretch'
  },

  wordContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    flex: 1
  },
  sitting: {
    width: '100%',
    aspectRatio: 1/1,
  },
  
  wordPuzzleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },  
  wordPuzzleBlank: {
    width: 100,
    height: 70,
    borderBottomColor: 'gray',
    borderBottomWidth: 2,
    marginLeft: 10
  },
  wordPuzzleText: {
    fontSize: 20
  },
});

export default styles;