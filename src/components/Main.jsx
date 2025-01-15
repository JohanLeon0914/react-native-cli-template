/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Button,
    FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function Main({navigation}) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(
          'https://api.rawg.io/api/games?key=8cce83bbf1c9472793ff7c8ffadf93ee',
        );
        const data = await response.json();
        setGames(data.results);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };

    fetchGames();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar />
      <Text style={{color: 'white'}}>Hola mundo</Text>
        <FlatList
            data={games}
            keyExtractor={(game) => game.slug}
            renderItem={({item}) => (
                <View>
                <Image
                  source={{uri: item.background_image}}
                  style={styles.image}
                />
                <Text style={styles.title}>{item.name}</Text>
                <Text style={{color: 'white'}}>{item.metacritic}</Text>
                <Button title="details" onPress={() => navigation.navigate('Details', {
                  game: item,
                })} />
              </View>
            )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
});

export default Main;
