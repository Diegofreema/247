import { Pressable, StyleSheet, View } from 'react-native';

import { Searchbar, Text } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { usePathname, useRouter } from 'expo-router';
import Profile from './Profile';
import { FontAwesome } from '@expo/vector-icons';

type Props = {};

const Header = (props: Props) => {
  const isLoggedIn = false;
  const pathname = usePathname();
  console.log('pathname', pathname);

  const router = useRouter();
  if (pathname === '/search') {
    return (
      <View
        style={{ marginHorizontal: 20, marginTop: 10, paddingVertical: 20 }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <Searchbar
            value=""
            icon={() => <FontAwesome name="arrow-left" size={20} />}
          />
        </View>
      </View>
    );
  }

  return (
    <View
      style={{
        marginTop: 10,
        paddingBottom: 15,
        backgroundColor: pathname === '/account' ? '#000' : 'transparent',
      }}
    >
      <View
        style={{
          flexDirection: 'row',

          alignItems: 'center',
          gap: 10,
          marginHorizontal: 10,
          paddingVertical: 20,
        }}
      >
        {pathname !== '/account' && (
          <Pressable
            style={{
              flex: 1,
              paddingHorizontal: 10,
              height: 50,
              borderColor: '#000',
            }}
            onPress={() => router.push('/search')}
          >
            <Searchbar
              editable={false}
              value=""
              icon={() => <FontAwesome name="search" size={20} />}
            />
          </Pressable>
        )}

        {pathname === '/account' && (
          <Text
            style={{
              flex: 1,
              color: '#fff',
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            Account
          </Text>
        )}
        <Pressable onPress={() => router.push('/cart')}>
          <FontAwesome
            name="shopping-cart"
            size={20}
            color={pathname === '/account' ? '#fff' : '#000'}
          />
        </Pressable>
      </View>
      {pathname === '/account' && <Profile isLoggedIn={isLoggedIn} />}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
