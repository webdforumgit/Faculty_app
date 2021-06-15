import * as React from 'react';
import { Button, View ,Text} from 'react-native';
import { NavigationContainer ,StackActions} from '@react-navigation/native';
export function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Page</Text>

        </View>
    );
}



export function NotificationsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Profile</Text>
            <Button

                onPress={() => navigation.navigate('LOGIN')}

            title="Go back home" />
        </View>
    );
}
