import { StyleSheet, Text, Dimensions } from 'react-native';
import React from 'react';
import { Card } from 'react-native-paper';

import { Link } from 'expo-router';
// import SkeletonContent from 'react-native-skeleton-content';
const { width } = Dimensions.get('window');
export type ProductProps = {
  title?: string;
  price?: string;
  category?: string;
  description?: string;
  image?: string;
  id: any;
};

const ProductCard = ({
  title,
  price,
  category,
  description,
  image,
  id,
}: ProductProps) => {
  const trimTitle = (title: string) => {
    const [firstWord, secondWord, thirdWord, fourthWord, ...remainingWords] =
      title.split(' ');
    if (remainingWords.length > 0) {
      return `${firstWord} ${secondWord} ${thirdWord} ${fourthWord}...`;
    }
    return title;
  };
  return (
    <Link asChild href={`/product/${id}`}>
      <Card style={{ width: width * 0.5, height: 300 }}>
        <Card.Cover source={{ uri: image }} style={{ marginBottom: 20 }} />
        <Card.Content>
          <Text style={{ fontSize: 15, fontWeight: '500' }}>
            {trimTitle(title as string)}
          </Text>
          <Text style={{ fontSize: 18, fontWeight: '700' }}>#{price}</Text>
        </Card.Content>
      </Card>
    </Link>
  );
};

export default ProductCard;

const styles = StyleSheet.create({});
