import * as React from 'react';
import { Button, View ,Text} from 'react-native';
import { NavigationContainer ,StackActions} from '@react-navigation/native';
export function Attendence({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Attendence</Text>
            <Button
                onPress={() => navigation.navigate('Home')}
                title="HOME LOAD"
            />
        </View>
    );
}




