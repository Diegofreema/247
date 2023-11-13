import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { useProduct } from '../../lib/queries';
import Container from '../../components/Container';
import NavigationHeader from '../../components/NavigationHeader';
import { Button, Card, Text } from 'react-native-paper';
import { ActivityIndicator } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
type Props = {};

const ProductDetail = (props: Props) => {
  const { productId } = useLocalSearchParams();
  const [qty, setQty] = useState(1);
  const { data, isLoading, isFetching, isPending } = useProduct(productId);
  console.log(data);
  return (
    <Container>
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        <NavigationHeader title="Details" />
        {isLoading || isFetching || isPending ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ActivityIndicator animating={true} />
          </View>
        ) : (
          <Card
            style={{ marginTop: 30, gap: 5 }}
            contentStyle={{
              padding: 10,
              backgroundColor: 'white',
              elevation: 0,
            }}
          >
            <Card.Title title={data?.title} />
            <Card.Cover source={{ uri: data?.image }} />
            <Card.Content style={{ marginVertical: 10, gap: 5 }}>
              <Text variant="titleLarge">{data?.category}</Text>
              <Text variant="bodyLarge" style={{ fontWeight: 'bold' }}>
                {data?.description}
              </Text>
              <View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  marginVertical: 20,
                }}
              />
              <Text variant="displaySmall" style={{ fontWeight: 'bold' }}>
                #{data?.price}
              </Text>
              <View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  marginVertical: 20,
                }}
              />
            </Card.Content>
            <Card.Actions style={{ flex: 1 }}>
              <View
                style={{
                  flexDirection: 'row',
                  gap: 15,
                  flex: 1,
                  alignItems: 'center',
                }}
              >
                <Text>Quantity:</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderColor: 'black',
                    borderWidth: 1,
                  }}
                >
                  <Button>Cancel</Button>
                  <Text>{qty}</Text>
                  <Button>Ok</Button>
                </View>
              </View>
            </Card.Actions>
          </Card>
        )}
      </ScrollView>
    </Container>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});
