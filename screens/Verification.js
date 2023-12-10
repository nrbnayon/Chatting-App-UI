import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import PageContainer from '../components/PageContainer';
import PageTitle from '../components/PageTitle';
import { COLORS, FONTS } from '../constants';
import OTPTextInput from 'react-native-otp-textinput';
import  Button  from '../components/Button';

const Verification = ({ navigation }) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <PageContainer>
        <PageTitle onPress={()=>navigation.navigate('PhoneNumber')}/>
        <View 
          style={{
            flex: 1,
            alignItems: 'center',
            marginHorizontal: 22
          }}
        >
          <Text style={{
            ...FONTS.h2,
            marginTop: 48,
            marginBottom: 22
          }}>
            Enter Verification Code
          </Text>
          <Text style={{
            ...FONTS.body3,
            textAlign: 'center'
          }}>We have sent you a SMS with the code</Text>
          <Text style={{...FONTS.body4,
            textAlign: 'center', marginTop: 5
          }}>to +880 17000-00000 </Text>
          <View style={{
            marginVertical: 60
          }}>
            <OTPTextInput 
              textInputStyle={{
                backgroundColor: COLORS.secondaryWhite,
                borderColor: COLORS.secondaryWhite,
                borderWidth: 1,
                borderRadius: 60,
                borderBottomWidth: 1
              }}
              inputCount={4}
            />
          </View>
          <Button
            title="Resend code"
            onPress={() => navigation.navigate('ProfileAccount')}
            disabled
            style={{
              width: '100%',
              paddingVertical: 12,
              marginBottom: 48
            }}
          />
        </View>
      </PageContainer>
    

    </SafeAreaView>
  )
}

export default Verification