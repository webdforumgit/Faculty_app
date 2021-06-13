import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet,Dimensions  } from 'react-native';
import * as Location from 'expo-location';
import MapView, {Marker} from 'react-native-maps';


export default function App1() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const val={
        latitude:22.18,
        longitude:87.59,

    }

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            console.log(location)
            setLocation(location);




        })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
        console.log(text)
    }

    return (
        <View style={styles.container}>
            {/*<Text >{text}</Text>*/}

            <MapView style={styles.map}
                     region={
                         {
                             latitude:22.18,
                             longitude:87.59,
                             latitudeDelta:0.15,
                             longitudeDelta:0.21
                         }
                     }

            ><Marker coordinate={val} /></MapView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
})