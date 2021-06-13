import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Login from './components/page/auth/login'
import Signup from './components/page/auth/signup'
import Forgetpassword from './components/page/auth/forgetpassword'


const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Login') {
                            iconName = focused
                                ? 'log-in-outline'
                                : 'log-in-outline';
                        } else if (route.name === 'Signup') {
                            iconName = focused ? 'person-add-outline' : 'person-add-outline';
                        }else{
                            iconName = focused ? 'alert-outline' : 'alert-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'blue',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="Login" component={Login} />
                <Tab.Screen name="Signup" component={Signup} />
                <Tab.Screen name="Help" component={Forgetpassword} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}