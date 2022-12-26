import {Pressable, View,StyleSheet,Text} from "react-native";
import ImageViewer from "./ImageViewer";
import PlaceholderImage from "../assets/Images/ggg.jpg";
export default function ({label}){
    return(
    <View style={styles.buttonContainer}>
        <Pressable style={[styles.button,{backgroundColor: 'red'}]} onPress={()=>alert('Okay!')}>
            <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
    </View>
    );
}
const styles=StyleSheet.create({
   buttonContainer:{
       height:68,
       width:150,
       marginHorizontal: 20,
       alignItems:"center",
       justifyContent:"center",
       padding:3,
   },
    button:{
        height:'70%',
        width:'100%',
        alignItems:"center",
        justifyContent:"center",
        borderRadius:20,
        flexDirection:"row",
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 16,
    },

});
