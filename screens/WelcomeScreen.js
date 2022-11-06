import { Image, ImageBackground, View, Text } from 'react-native';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import colors from '../config/colors';

export default function WelcomeScreen({ navigation }) {
  const onPress = () => {
    console.log('logedIn');
  };
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={{
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
    >
      <View style={{ alignItems: 'center', position: 'absolute', top: 70 }}>
        <Image
          source={require('../assets/logo-red.png')}
          style={{
            width: 100,
            height: 100,
          }}
        />
        <AppText>Smth you want to sell</AppText>
      </View>
      <AppButton title="Login" onPress={() => navigation.navigate('Login')} />
      <AppButton
        title="Register"
        color="secondary"
        onPress={() => navigation.navigate('Register')}
      />
    </ImageBackground>
  );
}
