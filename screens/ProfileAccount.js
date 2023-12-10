import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import PageContainer from '../components/PageContainer';
import PageTitle from '../components/PageTitle';
import { COLORS } from '../constants';
import { AntDesign } from '@expo/vector-icons';
import Input from '../components/Input';
import Button from '../components/Button';

const ProfileAccount = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PageContainer>
        <PageTitle
         title='Your Profile'
         onPress={()=>navigation.navigate('Verification')}
        />
        <View style={{flex: 1, alignItems: 'center'}}>
          <View 
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              backgroundColor: COLORS.secondaryWhite,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <AntDesign name="user" size={64} color="#111" />
            <View 
              style={{
                position: 'absolute',
                bottom: 9,
                right: 0
              }}
            >
              <AntDesign name="pluscircle" size={24} color={COLORS.black}/>
            </View>
          </View>
          <View style={{width: '100%', paddingHorizontal: 22, paddingVertical: 60}}> 
                <Input 
                  id="First Name"
                  placeholder="First Name"
                />
                <Input 
                  id="Last Name"
                  placeholder="Last Name (optional)"
                />
                <Button
                  title="Save"
                  style={{
                    width: "100%",
                    paddingVertical: 12,
                    marginVertical: 12,
                    marginBottom: 48,
                    marginTop: 48
                  }}
                  onPress={() =>navigation.navigate('BottonTabNavigation')}
                />
          </View>
        </View>
      </PageContainer>
    </SafeAreaView>
  );
};

export default ProfileAccount;
