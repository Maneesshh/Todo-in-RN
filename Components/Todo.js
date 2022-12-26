import React, {useState} from "react";
import {Button, TextInput, View, StyleSheet, Text} from "react-native";
import {FlatList} from "react-native-web";
export default function Todo(){
    const [item,setItem]=useState("");
    const [items, setItems] = useState([]);
    const addItem = () => {
        setItems([item, ...items]);

        // js -> destructuring, spread operator

        setItem("");
    };
    const onItemChange = (event) => setItem(event.target.value);

    function SingleItem({
                            item,
                            backgroundColor,
                        }: {
        item: String;
        backgroundColor: String;
    }) {
        return (

            <Text style={{ backgroundColor: backgroundColor, margin: 10 }}>{item}</Text>
        );
    }

    return(
     <View style={styles.container}>
         <TextInput style={styles.input} placeholder="Enter Text here!" value={item} onChangeText={onItemChange}/>
     <View style={styles.buttons}>
         <Button title="Add"  onPress={addItem} />
     </View>
        <Text>
         To Do ({items.length})
         <FlatList>
             {items.map((singleItem, index) => (
                 <SingleItem
                     item={singleItem}
                     backgroundColor={index % 2 === 0 ? "gray" : "green"}
                 />
             ))}
         </FlatList>
        </Text>
         <Text style={{fontWeight:'bold',margin:10}}>Typed Text is :::{item}</Text>
     </View>
 );
}
const styles=StyleSheet.create({
    input:{
        height:70,
        width: '100%',
        margin:0,
        padding:20,
        borderWidth: 2,
        fontsize:10,
        backgroundColor:'white'
    },
    container:{
        height:68,
        width:150,
        marginHorizontal: 20,
        alignItems:"center",
        justifyContent:"center",
        padding:3,
    },
    buttons:{
        height:40,
        width:'50%',
        margin: 10,
        borderRadius:20,

    }
});