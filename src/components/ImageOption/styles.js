import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  optionContainer: {
    // border
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: '#c9c9c9',
    borderRadius: 10,    
    // size
    width: '48%',
    height: '48%',
    // spacing
    padding: 10,
    alignItems: 'center'
  },
  optionImage: {
    width: '100%',
    flex: 1,
  },
  optionText: {
    color: '#0c0c0c',
    fontWeight: 'bold'
  },
  selectedText: {
    color: '#40BEF7',
    fontWeight: 'bold'
  },
  selectedContainer: {
    backgroundColor: '#DDF4FE',
    borderColor: '#81D5FE'
  },
  isWrong: {
    backgroundColor: '#ff4c4c'
  }
})

export default styles;