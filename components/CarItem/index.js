import React from 'react';
import {Text, View, ImageBackground} from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';

const CarItem = props => {
  const {name, tagline, tagLineCTA, image} = props.car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.subtitleCTA}>{tagLineCTA} </Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={'Custom Order'}
          onPress={() => {
            console.warn('pressed');
          }}
        />

        <StyledButton
          type="secondary"
          content={'Existing Inventory'}
          onPress={() => {
            console.warn(' existing pressed');
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
