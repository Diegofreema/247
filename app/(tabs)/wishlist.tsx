import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import NavigationHeader from '../../components/NavigationHeader';
import Container from '../../components/Container';

type Props = {};

const wishlist = (props: Props) => {
  return (
    <Container>
      <NavigationHeader title="Wishlist" />
      <Text>wishlist</Text>
    </Container>
  );
};

export default wishlist;

const styles = StyleSheet.create({});
