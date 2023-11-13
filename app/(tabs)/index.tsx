import { FlatList, ScrollView, StyleSheet } from 'react-native';
import { View } from 'react-native';

import Header from '../../components/Header';

import { useProducts } from '../../lib/queries';
import ProductCard, { ProductProps } from '../../components/ProductCard';
import { Text } from 'react-native-paper';

export default function TabOneScreen() {
  const { data } = useProducts(10);

  const { data: newArrivals } = useProducts(5);
  console.log(data && data[0]);

  const itemToRender = ({ item }: { item: ProductProps }) => {
    return (
      <ProductCard
        id={item?.id}
        price={item?.price}
        title={item?.title}
        image={item?.image}
      />
    );
  };
  return (
    <ScrollView>
      <Header />
      <View style={{ marginBottom: 20 }}>
        {/* <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 8,
            paddingHorizontal: 6,
          }}
          horizontal
          data={data}
          renderItem={itemToRender}
          keyExtractor={(item) => item?.id}
        /> */}
      </View>

      <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>
        New Arrivals
      </Text>
      <View>
        {/* <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 8,
            paddingHorizontal: 6,
            marginVertical: 20,
          }}
          horizontal
          data={newArrivals}
          renderItem={itemToRender}
          keyExtractor={(item) => item?.id}
        /> */}
      </View>
    </ScrollView>
  );
}
