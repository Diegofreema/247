import { FlatList, ScrollView, StyleSheet } from 'react-native';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import Header from '../../components/Header';

import { useProducts } from '../../lib/queries';
import ProductCard, { ProductProps } from '../../components/ProductCard';
import { Text } from 'react-native-paper';

export default function TabOneScreen() {
  const { data, isFetching, isLoading, isPending } = useProducts(10);

  const {
    data: newArrivals,
    isFetching: isFetchingNewArrival,
    isLoading: isLoadingNewArrival,
    isPending: isPendingNewArrival,
  } = useProducts(5);
  console.log(data && data);

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
        {isFetching || isLoading || isPending ? (
          <View
            style={{
              minHeight: 300,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ActivityIndicator animating={true} />
          </View>
        ) : (
          <FlatList
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              gap: 8,
              paddingHorizontal: 6,
              paddingVertical: 10,
            }}
            horizontal
            data={data}
            renderItem={itemToRender}
            keyExtractor={(item) => item?.id}
          />
        )}
      </View>

      <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>
        New Arrivals
      </Text>
      <View>
        {isFetchingNewArrival || isLoadingNewArrival || isPendingNewArrival ? (
          <View
            style={{
              minHeight: 300,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ActivityIndicator animating={true} />
          </View>
        ) : (
          <FlatList
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              gap: 8,
              paddingHorizontal: 6,
              paddingVertical: 10,
              marginVertical: 20,
            }}
            horizontal
            data={newArrivals}
            renderItem={itemToRender}
            keyExtractor={(item) => item?.id}
          />
        )}
      </View>
    </ScrollView>
  );
}
