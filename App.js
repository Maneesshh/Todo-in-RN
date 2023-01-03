import {StyleSheet, View,Button} from 'react-native';
const PlaceholderImage = require('./assets/Images/ggg.jpg');
import ImageViewer from './Components/ImageViewer';
import Todo from "./Components/Todo";
import Rct from "./Components/RCt";
import React from "react";
export default function App() {
    return (
        <View style={styles.container}>
            {/*   <View style={styles.imageContainer}>*/}
            {/*    <ImageViewer placeholderImageSource={PlaceholderImage} />*/}
            {/*</View>*/}
            {/* <View style={styles.footer}>*/}
            {/* /!*<Button theme="primary" title="Click Me Please !"/>*!/*/}
            {/*   </View>*/}
            {/*<Todo/>*/}
            <Rct/>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    imageContainer: {
        flex: 1,
        paddingTop: 58,
    },
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
    footer:{
        alignItems:"center",
        flex:0.5,
    },

});