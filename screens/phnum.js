import { View, Text, Image, TextInput, Modal, TouchableWithoutFeedback, FlatList } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import PageTitle from '../components/PageTitle';
import { ScrollView } from 'react-native';
import { COLORS, FONTS, SIZES, images } from '../constants';
import { TouchableOpacity } from 'react-native';
import { Button } from 'react-native';
import { useState } from 'react';
import { useEffect } from 'react';

const PhoneNumber = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [ selectedArea, setSelectedArea] = useState(null);
  const [ areas, setAreas] = useState([]);
  
  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then((response) => response.json())
      .then((data) => {
        let areaData = data.map((item) => {
          return {
            code: item.alpha2Code,
            name: item.name,
            callingCode: `+${item.callingCodes[0]}`, 
            flag: `http://flagsapi.com/${alpha2code}/flat/64.png`
          };
        });
        setAreas(areaData);
        if(areaData.length > 0){
          let defaultData = areaData.filter((a)=>a.code == 'BD');

          if(defaultData.length > 0){
            setSelectedArea(defaultData[0]);
          }
        }
        // console.log(areaData);
      });
  }, []);
  
  function renderAreasCodesModal(){
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity 
          style={{
            padding: 10,
            flexDirection: 'row'
          }}
          onPress={() =>{
            setSelectedArea(item),
            setModalVisible(false)
          }}
        >
          <Image
            source={{uri: item.flag}}
            style={{
              height: 30,
              width: 30,
              marginRight: 10
            }}
          />
          <Text style={{...FONTS.body3, color: COLORS.white}}>
            {item.item}
          </Text>
        </TouchableOpacity>
      )
    }
    return (
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
      > 
        <TouchableWithoutFeedback
          onPress={() => setModalVisible(false)}
        >
          <View 
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <View style={{
              height: 400,
              width: SIZES.width * 0.8,
              color: COLORS.white,
              backgroundColor: "#342342",
              borderRadius: 12
            }}>
              <FlatList
                data={areas}
                renderItem={renderItem}
                keyExtractor={(item) => item.code}
                verticalScrollIndicator={false}
                style={{
                  padding: 20,
                  marginBottom: 20
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <PageTitle onPress={() => navigation.navigate('Walkthrough')} />

      <ScrollView>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ ...FONTS.h2, color: COLORS.black, marginTop:80 }}>
              Enter Your Phone Number
            </Text>
            <Text style={{ 
              ...FONTS.body4, 
              color: COLORS.black,
              textAlign: 'center',
              marginVertical: 4
            }}
            >
              Please confirm your country and enter your phone number
            </Text>

            <View style={{
              width: "100%",
              paddingHorizontal: 22,
              paddingVertical: 60
            }}>
              <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 88
              }}>
                  <TouchableOpacity 
                  style={{
                    width: 100,
                    height:48,
                    marginHorizontal: 5,
                    borderRadius: SIZES.padding,
                    borderColor: SIZES.secondaryWhite,
                    // borderWidth: 1,
                    backgroundColor: COLORS.secondaryWhite,
                    flexDirection: 'row',
                    fontSize: 12
                  }}
                  onPress={()=>setModalVisible(true)}
                  >
                    <View style={{ justifyContent: 'center'}}>
                      <Image
                        source={images.down}
                        style={{
                          height: 10,
                          width: 10,
                          tintColor: COLORS.black
                        }}
                      />
                    </View>
                    <View style={{justifyContent: 'center', marginLeft: 5}}>
                        <Image
                          source={{ uri: selectedArea?.flag }}
                          resizeMode='contain'
                          style={{
                            width: 30,
                            height: 30
                          }}
                        />
                    </View>
                    <View style={{justifyContent: 'center', marginLeft: 5}}>
                      <Text style={{
                        color: COLORS.black,
                        ...FONTS.body3
                      }}>{selectedArea?.callingCode}</Text>
                    </View>
                  </TouchableOpacity>

                  {/* ------------Phone Number Input ----------- */}

                  <TextInput 
                    style={{
                      flex: 1,
                      marginVertical: 10,
                      borderColor: '#111',
                      backgroundColor: COLORS.secondaryWhite,
                      borderRadius: SIZES.padding,
                      paddingLeft: SIZES.padding,
                      height: 48,
                      fontSize: 12,
                      color: '#111'
                    }}
                    placeholder="Enter 11 Digit Phone Number"
                    placeholderTextColor={ COLORS.black }
                    selectionColor={ COLORS.black }
                    keyboardType='numeric'
                    />
              </View>
              <Button 
                title='Submit'
                onPress={() => navigation.navigate('Verification')}
                style = {{
                  width: '100%',
                  paddingVertical: 12,
                  marginBottom: 48
                }}
              />
            </View>
        </View>
        {renderAreasCodesModal()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PhoneNumber;
