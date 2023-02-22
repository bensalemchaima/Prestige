import React, {useRef, useState} from 'react';
import {View, Text, TouchableOpacity, Image, Animated} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

const menus = [
  {icon: require('../../../assets/images/menus.png'), title: 'Home'},
  {icon: require('../../../assets/images/menus.png'), title: 'Explore'},
  {icon: require('../../../assets/images/menus.png'), title: 'Library'},
  {icon: require('../../../assets/images/menus.png'), title: 'Friends'},
  {icon: require('../../../assets/images/menus.png'), title: 'chat'},
  {icon: require('../../../assets/images/menus.png'), title: 'Add Friends'},
];
const HomeScreen = () => {
  const [showMenu, setShowMenu] = useState(false);
  const moveToRight = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;
  const [selectedMenuItem, setSelectedMenuItem] = useState(0);
  return (
    <View style={{flex: 1}}>
      {/* menu design*/}
      <View style={{flex: 1, backgroundColor: '#6600ff'}}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 50,
          }}>
          <Image
            source={require('../../../assets/images/profile.png')}
            style={{width: 70, height: 70, borderRadius: 35, marginLeft: 20}}
          />
          <View style={{marginLeft: 20}}>
            <Text style={{fontSize: 22, fontWeight: '800', color: '#fff'}}>
              Chaima Ben salem
            </Text>
            <Text style={{fontSize: 14, marginTop: 5, color: '#fff'}}>FCR</Text>
          </View>
        </View>
        <View style={{marginTop: 30}}>
          <FlatList
            data={menus}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    width: 200,
                    height: 50,
                    marginLeft: 20,
                    marginTop: 20,
                    backgroundColor:
                      selectedMenuItem === index ? '#fff' : '#6600ff',
                    borderRadius: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    setSelectedMenuItem(index);
                  }}>
                  <Image
                    source={item.icon}
                    style={{
                      width: 24,
                      height: 24,
                      marginLeft: 15,
                      tintColor: selectedMenuItem == index ? '#000' : 'pink',
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      marginLeft: 20,
                      color: selectedMenuItem == index ? '#000' : 'pink',
                    }}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>

      {/* home design*/}
      <Animated.View
        style={{
          flex: 1,
          backgroundColor: 'white',
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          transform: [{scale: scale}, {translateX: moveToRight}],
          borderRadius: showMenu ? 15 : 0,
        }}>
        <View style={{flexDirection: 'row', marginTop: 50}}>
          <TouchableOpacity
            style={{marginLeft: 20}}
            onPress={() => {
              Animated.timing(scale, {
                toValue: showMenu ? 1 : 0.7,
                duration: 300,
                useNativeDriver: true,
              }).start();
              Animated.timing(moveToRight, {
                toValue: showMenu ? 0 : 250,
                duration: 300,
                useNativeDriver: true,
              }).start();
              setShowMenu(!showMenu);
            }}>
            <Image
              source={require('../../../assets/images/menus.png')}
              style={{width: 30, height: 30}}
            />
          </TouchableOpacity>
          <Text style={{marginLeft: 20, fontSize: 20, fontWeight: '800'}}>
            {menus[selectedMenuItem].title}
          </Text>
        </View>
      </Animated.View>
    </View>
  );
};

export default HomeScreen;
