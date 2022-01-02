import React from 'react'
import { View, Text } from 'react-native'
import {Divider} from "react-native-elements"
import About from '../components/About'
import MenuItem from '../components/MenuItem'

export default function RestaurantDetail({route}) {
    return (
        <View>
            <About route = {route}/>
            <Divider width={1.8} style = {{marginVertical: 20}} /> 
            <MenuItem route = {route}/>
        </View>
    )
}
