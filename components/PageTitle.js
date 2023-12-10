import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS, SIZES, FONTS } from '../constants';

const PageTitle = (props) => {
  return (
    <View style={styles.pageTitleContainer}>
      <TouchableOpacity 
      onPress={props.onPress}
      style={{
        marginRight: 12
      }}
      >
        <MaterialIcons 
            name="keyboard-arrow-left" 
            size={SIZES.padding * 3} 
            color={COLORS.black} />
      </TouchableOpacity>
      {
        props.title && (
            <Text style={{ ...FONTS.h4, color: COLORS.black}}>
                {props.title}
            </Text>
        )
      }
    </View>
  )
};

const styles = StyleSheet.create({
    pageTitleContainer: {
        marginHorizontal: 22,
        marginVertical: 22,
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default PageTitle