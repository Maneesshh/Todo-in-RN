import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Constants from 'expo-constants';

export default () => {
    const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
        defaultValues: {
            firstName: '',
            lastName: ''
        }
    });
    const onSubmit = data => {
       alert(data.firstName+" "+data.lastName);
    };

    console.log('errors', errors);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>First name</Text>
            <Controller
                control={control}
                render={({field: { onChange, onBlur, value }}) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                )}
                name="firstName"
                rules={{ required: true }}
                defaultValue=""
            />
            {errors.firstName && <Text style={styles.error}>First Name is required.</Text>}

            <Text style={styles.label}>Last name</Text>
            <Controller
                control={control}
                render={({field: { onChange, onBlur, value }}) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                )}
                name="lastName"
                rules={{ required: true }}
            />
            {errors.lastName && <Text style={styles.error}>Last Name is required.</Text>}
            <View style={styles.button}>
                <Button
                    color
                    title="Submit"
                    onPress={handleSubmit(onSubmit)}
                />
            </View>
            <View style={styles.button1}>
                <Button
                    color="Red"
                    title="Reset"
                    onPress={() => {
                        reset({
                            firstName: '',
                            lastName: ''
                        })
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    label: {
        color: 'black',
        margin: 20,
        marginLeft: 0,
    },
    error:{
        color:'red',
        padding:5,

    },
    button: {
        marginTop: 40,
        color: 'white',
        height: 40,
        backgroundColor: 'green',
        borderRadius: 4,
    },
    button1: {
        marginTop: 40,
        color: 'white',
        height: 40,
        backgroundColor: 'red',
        borderRadius: 4,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        padding: 8,
        backgroundColor: '#fff',
    },
    input: {
        backgroundColor: 'white',
        borderColor: 'black',
        height: 40,
        padding: 10,
        borderRadius: 4,
        borderWidth:1,
    },
});
