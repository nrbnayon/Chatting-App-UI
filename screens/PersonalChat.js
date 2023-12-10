import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, FONTS, SIZES } from '../constants'
import { StatusBar } from 'expo-status-bar'
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import { GiftedChat, Send, Bubble } from 'react-native-gifted-chat'

const PersonalChat = ({ navigation }) => {

  const [messages, setMessages] = useState([]);
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello dear',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    )
  }, [])

  const renderSend = (props)=> {
    return (
      <Send {...props}>
        <View style={{
          height: 36,
          alignItems: 'center',
          justifyContent: 'center',
          width: 36,
          borderRadius: 18,
          backgroundColor: COLORS.primary,
          marginRight: 5,
          marginBottom: 5
        }}>
          <FontAwesome name='send' size={12} color={COLORS.white} />
        </View>
      </Send>
    )
  }
  const renderBubble = (props) =>{
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right:{
            backgroundColor: COLORS.primary
          }
        }}
        textStyle={{
          right:{
            color: COLORS.white
          }
        }}
      />
    )
  }
  return (
    <SafeAreaView style={{flex: 1, color: COLORS.secondaryWhite}}>
      <StatusBar style='light' backgroundColor={COLORS.white}/>
      <View style={{
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: 22,
        borderColor: COLORS.white,
        height: 60
      }}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Contact")}
          >
            <MaterialIcons 
              name='keyboard-arrow-left'
              size={24}
              color={COLORS.black}
            />
          </TouchableOpacity>
          <Text style={{...FONTS.h4, marginLeft: 8}}>Nayon</Text>
        </View>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <TouchableOpacity 
            onPress={() => console.log('search')}
            style={{
              marginLeft: 8,
            }}
          >
            <MaterialIcons 
              name='search'
              size={24}
              color={COLORS.black}
            />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => console.log('menu')}
            style={{
              marginLeft: 8,
            }}
          >
            <MaterialIcons 
              name='menu'
              size={24}
              color={COLORS.black}
            />
          </TouchableOpacity>
        </View>
      </View>

      <GiftedChat 
        messages={messages}
        onSend={(setMessages) => onSend(setMessages)}
        user={{
          _id:1
        }}
        renderBubble={renderBubble}
        alwaysShowSend
        renderSend={renderSend}
        scrollToBottom
        textInputStyle={{
          borderRadius: 22,
          borderWidth: 1,
          borderColor: COLORS.gray,
          marginRight: 6,
          paddingHorizontal: 12
        }}
      />
    </SafeAreaView>
  )
}

export default PersonalChat