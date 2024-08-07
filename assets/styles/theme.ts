import { StyleSheet, Dimensions } from 'react-native'

const link = Dimensions.get('screen').width

const text = StyleSheet.create({
  normal: {
    fontSize: link
  }
})