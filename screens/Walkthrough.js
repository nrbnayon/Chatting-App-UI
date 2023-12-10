import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import PageContainer from '../components/PageContainer';
import { SIZES, FONTS, images } from '../constants';
import { Image } from 'react-native';
import Button from '../components/Button';

const Walkthrough = ({ navigation }) => {
  return (
    <SafeAreaView style= {{ flex: 1}}>
      <PageContainer>
        <View 
          style={{ 
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            marginHorizontal: 22
          }}
          >
            <Image
              source={images.illustration}
              style={{
                width: SIZES.width * 0.7,
                height: SIZES.width * 0.7,
                marginVertical: 48
              }}
              />

              <Text 
                style={{
                  ...(SIZES.width <= 360? 
                      {...FONTS.h2}
                      : {...FONTS.h1} 
                    ),
                    textAlign: 'center',
                    marginHorizontal: SIZES.padding * 0.8
                }}
              >
                Conntet easly with your family and friends over countries.
              </Text>

              <View style={{
                width: '100%',
                alignItems: 'center',
                marginTop: 32
              }}>
                <Text style={{ ...FONTS.body3, marginVertical: 12 }}>
                  Terms and Privicy
                </Text>

                <Button 
                  title="Start Messaging"
                  onPress = {() => navigation.navigate('PhoneNumber')}
                  style={{
                    width: '100%',
                    paddingVertical: 12,
                    marginBottom: 40
                  }}
                />
              </View>
          </View>
      </PageContainer>
    </SafeAreaView>
  )
}

export default Walkthrough