import * as React from 'react';
import { NavigationContainer ,StackActions} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button,Text,View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Login from './components/page/auth/login'
import Signup from './components/page/auth/signup'
import Forgetpassword from './components/page/auth/forgetpassword'
import {HomeScreen,NotificationsScreen} from './components/page/faculty/home'
import {Attendence} from './components/page/faculty/attendence'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function LogoTitle(prop) {
    return (
        <View
            style={{ justifyItems : "center" }}
        >
            <Text style={{fontWeight: 'bold',color:'#fff'}}>{prop.title}</Text>
        </View>
    );
}



const HomeStack = createStackNavigator();
const HomeStackScreen= ({navigation}) =>{
    return (
        <HomeStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#9fa8da',
                },

                headerTitle : <LogoTitle  title="HOME"/>

            }}
        >
            <HomeStack.Screen
                name="Feed"
                component={HomeScreen}
                options={{

                    headerLeft :()=>(
                        <Icon.Button name="menu-outline" size={30} marginLeft={10} backgroundColor='#9fa8da'
                        onPress={()=>navigation.toggleDrawer()}

                        />
                    )
                }}
            />
        </HomeStack.Navigator>
    )
}

function Attendence_tabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="QR" component={HomeScreen} />
            <Tab.Screen name="NQR" component={HomeScreen} />
        </Tab.Navigator>
    );
}


const AttendenceStack = createStackNavigator();
const AttendenceStackScreen= ({navigation}) =>{
    return (
        <AttendenceStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#9fa8da',
                },

                headerTitle : <LogoTitle  title="ATTENDENCE"/>

            }}
        >
            <AttendenceStack.Screen
                name="Feed"
                component={Attendence_tabs}
                options={{

                    headerLeft :()=>(
                        <Icon.Button name="menu-outline" size={30} marginLeft={10} backgroundColor='#9fa8da'
                                     onPress={()=>navigation.toggleDrawer()}

                        />
                    )
                }}
            />
        </AttendenceStack.Navigator>
    )
}








function DrawerTabs({navigation}) {
    return (
        <Drawer.Navigator initialRouteName="Feed"

        >
            <Drawer.Screen name="Home" component={HomeStackScreen} />
            <Drawer.Screen name="Attendence" component={AttendenceStackScreen} />
        </Drawer.Navigator>
    );
}






const RootStack = createStackNavigator();
export default function App() {
        return (
            <NavigationContainer>
                <RootStack.Navigator >
                    <RootStack.Screen name="LOGIN" component={Login} options={{headerShown: false}}/>
                    <RootStack.Screen name="SIGNUP" component={Signup} options={{headerShown: false}}/>
                    <RootStack.Screen name="FORGETPASS" component={Forgetpassword} options={{headerShown: false}}/>
                    <RootStack.Screen name="Home" component={DrawerTabs} options={{headerShown: false}}
                    />

                </RootStack.Navigator>
            </NavigationContainer>
        );

}