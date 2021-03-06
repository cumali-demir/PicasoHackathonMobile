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

    async setToken(token) {
        console.log(token);
        try {
            await AsyncStorage.setItem('token',token );


        } catch (error) {
            console.log("SetCurrentUserHataSI")
        }

    },

    async getToken() {

        try {
            const token = await AsyncStorage.getItem('token');
             return token
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
    },

    saveAdvertise(params){

        return new Promise((resolve, reject) => {
            axios.post(constant + "u/advertise/create",params )
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

    giveOffer(params){


        return new Promise((resolve, reject) => {
            axios.post(constant + "u/offer/create",params )
                .then(response => {

                    let data = response.data;
                    let success = data.success;
                    if (success){
                        console.log(response);
                        resolve(data)
                    }else{
                        reject(data.message)
                    }

                }, error => reject(error));
        });

    },

    getMyAdvertises(token){

        return new Promise((resolve, reject) => {
            axios.post(constant + "u/advertise/user",{token})
                .then(response => {

                    let data = response.data;
                    let success = data.success;
                    if (success){
                        console.log(response);
                        resolve(data.advertise)
                    }else{
                        reject(data.message)
                    }

                }, error => {
                    console.log("bu hata ne hatasi acaba");
                    reject(error)
                })
        });

    },

    getMyOffers(token){

        return new Promise((resolve, reject) => {
            axios.post(constant + "u/offer/user",{token})
                .then(response => {

                    let data = response.data;
                    let success = data.success;
                    if (success){
                        console.log(response);
                        resolve(data.offer)
                    }else{
                        reject(data.message)
                    }

                }, error => {
                    console.log("bu hata ne hatasi acaba");
                    reject(error)
                })
        });
    },

    myAdvertiseDetail(token,_id){

        return new Promise((resolve, reject) => {
            axios.post(constant + "u/offer/advertise",{token,_id})
                .then(response => {

                    let data = response.data;
                    let success = data.success;
                    if (success){
                        console.log(response);
                        resolve(data.offer)
                    }else{
                        reject(data.message)
                    }

                }, error => {
                    console.log("bu hata ne hatasi acaba");
                    reject(error)
                })
        });
    },
    acceptOrNot(token,_id,advertiseID,status){

        console.log("token",token)
        console.log("_id",_id)

        console.log("advirtiseID",advertiseID)

        console.log("status",status)


        return new Promise((resolve, reject) => {
            axios.post(constant + "u/offer/update",{token,_id,advertiseID,status})
                .then(response => {

                    let data = response.data;
                    let success = data.success;
                    if (success){
                        console.log(response);
                        resolve(success)
                    }else{
                        reject(data.message)
                    }

                }, error => {
                    console.log("bu hata ne hatasi acaba");
                    reject(error)
                })
        });
    }
}
