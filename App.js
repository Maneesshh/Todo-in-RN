import {StyleSheet, View} from 'react-native';
const PlaceholderImage = require('./assets/Images/ggg.jpg');
import ImageViewer from './Components/ImageViewer';
import Button from './Components/Button'
import Todo from "./Components/Todo";
export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageViewer placeholderImageSource={PlaceholderImage} />
            </View>
            <View style={styles.footer}>
                {/*<Button theme="primary" label="Click Me Please !"/>*/}
            </View>
            <Todo/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
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