import axios from 'axios'
import constant from "../Helpers/Constants"
import {Platform, TouchableOpacity,AsyncStorage, StyleSheet, Text, View,TextInput} from 'react-native';

export const Services = {


    login(username, password) {

         let params = {
             username:username,
             password:password
         };


        return new Promise((resolve, reject) => {
            axios.post(constant + "signin",params )
                .then(response => {

                    let data = response.data;
                    let success = data.success;
                    if (success){
                        console.log(response);
                        resolve(data.token)
                    }else{
                        reject(data.message)
                    }

                }, error => reject(error));
        });
    },

    getAdvertises() {
        //
        // let params = {
        //     username:username,
        //     password:password
        // };

        return new Promise((resolve, reject) => {
            axios.get(constant + "advertise" )
                .then(response => {
                    console.log(response);
                    let data = response.data;
                    let success = data.success;
                    success ? resolve(data.advertise) : reject(message)
                }, error => reject(error));
        });
    },

    async setCurrentUser(username,password,token) {

        let user = {username:username,password:password,token:token};

        console.log(user)
        try {
            await AsyncStorage.setItem('username',username );
            await AsyncStorage.setItem('username',password );
            await AsyncStorage.setItem('username',token );

        } catch (error) {
            console.log("SetCurrentUserHataSI")
        }

    },

    async getCurrentUser() {
        console.log("qqqqweeeee",JSON.parse(user.username));

        try {
            const username = await AsyncStorage.getItem('username');
            const password = await AsyncStorage.getItem('password');
            const token = await AsyncStorage.getItem('token');

            console.log("username",username);
            console.log("password",username);
            console.log("token",username);
             let user = {
                 username:username,
                 password:password,
                 token:token
             };

             return user
        } catch (error) {
            console.log("getUser ERROR LOCAL")
            return null
        }


    },

    getCategories(){
        return new Promise((resolve, reject) => {
            axios.get(constant + "categories")
                .then(response => {

                    let data = response.data;
                    let success = data.success;
                    if (success){
                        console.log(response);
                        resolve(data.categories)
                    }else{
                        reject(data.message)
                    }

                }, error => reject(error));
        });
    }

}
