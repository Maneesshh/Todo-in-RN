import React from "react";
import {View, StyleSheet, Text, TextInput, Button} from "react-native";
import {Controller, useForm} from "react-hook-form";
export default ()=>{
    const{handleSubmit,control,formState:{errors}}= useForm({
        defaultValues:{
            phone:'',
            password:'',
            rememberMe:false,
        }
    })
    const onsubmit=data=>{
        alert(data.phone+" "+data.password+" "+data.rememberMe);
    }
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Login</Text>
            <Text style={styles.label}>Phone or Email</Text>
            <Controller render={({field:{onChange,onBlur,value}})=>(
                <TextInput onChangeText={value=>onChange(value)} value={value} onBlur={onBlur} style={styles.input} />
            )} name="phone" control={control} rules={{required:true}} defaultValue='' />
            {errors.phone && <Text style={styles.error}>Email or Phone required</Text> }
            <Text style={styles.label} >Password</Text>
            <Controller render={({field:{onChange,onBlur,value}})=>(
                <TextInput onChangeText={value=>onChange(value)} value={value} onBlur={onBlur} style={styles.input} />
            )} name="password" control={control} rules={{required:true}} defaultValue='' />
            {errors.password && <Text style={styles.error}>Password is required</Text> }
            {/*<Controller render={({field:{onChange,value}})=>(*/}
            {/*    <CheckBox onChange={value=>onChange(value)} checked={value}>Remember Me</CheckBox>*/}
            {/*)} name="rememberMe" control={control} />*/}
            <Button title="Sign In" onPress={handleSubmit(onsubmit)} />
        </View>
    );
}
const styles=StyleSheet.create({
    container:{
        height:'50%',
        width:'80%',
        padding:6,
        marginTop:90,
        marginLeft:40,
        flex:3,
    },
    label:{
        color:'#000',
        fontWeight:"400",
        marginBottom:10,
        fontSize:14,
    },
    input:{
        borderWidth:1,
        borderColor:'#000',
        borderStyle:"solid",
        borderRadius:1,
        marginBottom:5,
    },
    text:{
        fontWeight:"bold",
        fontSize:24,
        color:'#000',
        marginLeft:'38%'
    },
    error:{
        color:"red",
        fontWeight:"bold",
    }
});