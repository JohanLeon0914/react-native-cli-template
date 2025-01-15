import { Text, View } from 'react-native';
import React from 'react';

function Details({route}) {

    const {game} = route.params;
  return (
      <View>
        <Text>{game.name}</Text>
      </View>
    );
}

export default Details;
