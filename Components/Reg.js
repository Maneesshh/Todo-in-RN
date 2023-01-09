import React from "react";
import {View, StyleSheet, TextInput, Text, Button} from "react-native";
import {Controller, useForm} from "react-hook-form";
 export default ()=>{

     const{handleSubmit,control,formState:{errors}}=useForm({
         defaultValues:{
             fullName:'',
             email:'',
             age:'',
         }
     })
     const onsubmit=data =>{
         alert("Name: "+data.fullName+" Email: "+data.email+" Age: "+data.age)
     }
     return(
         <View style={styles.container}>
             <Text style={styles.text}>SignUp</Text>
             <Text style={styles.label}> Full Name</Text>
             <Controller render={({field:{onChange,onBlur,value}})=>(
                 <TextInput style={styles.input} onChangeText={value=>onChange(value)} value={value} onBlur={onBlur} />
             )}
                         name="fullName" control={control} rules={{required:true}} defaultValue=" " />
             {errors.fullName && <Text style={styles.error}>Full Name is Required</Text> }
             <Text style={styles.label}>Email</Text>
             <Controller render={({field:{onChange,onBlur,value}})=>(
                 <TextInput textContentType='emailAddress'  onChangeText={value=>onChange(value)} value={value} style={styles.input} onBlur={onBlur} />
             )} name="email" control={control} rules={{required:true}} defaultValue=" "/>
             {errors.email && <Text style={styles.error}>Email is required</Text> }
             <Text style={styles.label}>Age</Text>
             <Controller render={({field:{onChange,onBlur,value}})=>(
                 <TextInput style={styles.input} onChangeText={value=>onChange(value)} value={value} onBlur={onBlur} />
             )} name="age" control={control} rules={{required:true}} defaultValue=" "/>
             {errors.age && <Text style={styles.error}>Age is required</Text> }
             <Button title="Sign Up" onPress={handleSubmit(onsubmit)} />

         </View>
     );
 }
 const styles=StyleSheet.create({
     container:{
         height:'100%',
         width:'80%',
         padding:6,
         marginTop:50,
         marginLeft:40,
     },
     label:{
         fontSize:14,
         fontWeight:"600",
         color:"#000",
     },
     input:{
         borderStyle:"solid",
         borderRadius:4,
         borderColor:"#000",
         borderWidth:1,
         backgroundColor:"#fff",
         marginTop:7,
         marginBottom:5,
     },
     text:{
         fontWeight:"bold",
         fontSize:24,
         color:'#000',
         marginLeft:'38%'
     },
     error:{
         color:'red',
         fontWeight:"bold",
     }
 });