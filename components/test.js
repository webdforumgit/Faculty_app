import Ionicons from "react-native-vector-icons/Ionicons";
import Login from "./page/auth/login";
import Signup from "./page/auth/signup";
import Forgetpassword from "./page/auth/forgetpassword";
import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {HomeScreen, NotificationsScreen} from "./page/faculty/home";

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
        activeTintColor: '#1565c0',
        inactiveTintColor: '#78909c',
    }}
>
    <Tab.Screen name="Login" component={Login} />
    <Tab.Screen name="Signup" component={Signup} />
    <Tab.Screen name="Help" component={Forgetpassword} />
</Tab.Navigator>

export default function App() {
    return (
        <NavigationContainer>


            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Notifications" component={NotificationsScreen} />
            </Drawer.Navigator>

        </NavigationContainer>
    );
}

onPress={() =>
