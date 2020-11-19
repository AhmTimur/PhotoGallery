import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {store} from "./src/redux/redux-store";
import {Provider} from "react-redux";
import {HomeScreen} from "./src/Components/HomeScreen";
import {DetailsScreen} from "./src/Components/DetailsScreen";
import {NavigationContainer, } from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

React.createContext(store)

const Stack = createStackNavigator();

export default function App() {
    return (
        <Provider store={store}>

                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="Photos" component={HomeScreen} options={{headerStyle: {backgroundColor: '#376da3'}}}/>
                        <Stack.Screen name="Details" component={DetailsScreen} options={{headerStyle: {backgroundColor: '#376da3'}}}/>
                    </Stack.Navigator>
                </NavigationContainer>
        </Provider>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        color: 'white',
        fontSize: 26
    }
});
