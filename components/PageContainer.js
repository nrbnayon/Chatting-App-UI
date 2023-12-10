import React from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { Platform } from 'react-native'
import { COLORS } from '../constants';

const PageContainer = (props) => {
  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        style = {{
            height: '100%',
            width: '100%',
            backgroundColor: COLORS.white
        }}
    >
        {props.children}
    </KeyboardAvoidingView>
  )
}

export default PageContainer