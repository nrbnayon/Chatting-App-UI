import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS } from '../constants'

const Input = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
            style={styles.input}
            {...props}
            placeholder={props.placeholder}
            placeholderTextColor={COLORS.gray}
        />
      </View>
      {
        props.errorText && (
            <View style={styles.errorContainer}>
                <Text style={{...FONTS.body4, color: 'gray'}}>
                    {props.errorText[0]}
                </Text>
            </View>
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
    },
    inputContainer:{
        width: '100%',
        backgroundColor: COLORS.secondaryWhite,
        paddingHorizontal: SIZES.padding,
        paddingVertical: 8,
        borderRadius: 8,
        borderColor: COLORS.secondaryWhite,
        borderWidth: 1,
        flexDirection: 'row',
        marginVertical: 5
    },
    input:{
        flex: 1, 
        padding: 0
    }
})
export default Input