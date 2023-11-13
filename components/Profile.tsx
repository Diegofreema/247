import React from 'react';
import { View } from 'react-native';
import { useRouter } from 'expo-router';
import { Button, Text } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

type Props = {
  isLoggedIn: boolean;
};

const Profile = ({ isLoggedIn }: Props) => {
  const router = useRouter();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginTop: 10,
      }}
    >
      <View>
        {isLoggedIn && (
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
            Welcome Diego
          </Text>
        )}
      </View>

      {isLoggedIn ? (
        <Button icon={'logout'} style={{ backgroundColor: '#fff' }}>
          Logout
        </Button>
      ) : (
        <Button
          icon={'login'}
          style={{ backgroundColor: '#fff' }}
          onPress={() => router.push('/login')}
        >
          Log in
        </Button>
      )}
    </View>
  );
};

export default Profile;
