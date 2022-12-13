import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewCircleScreen from './src/screens/NewCircleScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
  
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
          headerShown:false
        }}>
        <Stack.Screen name="NewCircle" component={NewCircleScreen} />
      </Stack.Navigator>
    </NavigationContainer>

 
  );
}


