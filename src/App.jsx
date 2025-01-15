/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './components/Main';
import Details from './components/Details';

const Stack= createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <StatusBar />
     <Stack.Navigator initialRouteName="Main">
       <Stack.Screen name="Main" component={Main} />
       <Stack.Screen name="Details" component={Details} />
     </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
