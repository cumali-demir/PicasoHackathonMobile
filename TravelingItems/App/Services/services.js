import axios from 'axios'

export const Services = {

     apiConstant: "192.168.1.142:3000/api/",

    login(username, password) {

         let params = {
             username:username,
             password:password
         }


        return new Promise((resolve, reject) => {
            axios.post("http://192.168.1.142:3000/api/signin",params )
                .then(response => {
                    let {content} = response.data;
                    resolve(content);
                }, error => reject(error));
        });
    },
}
