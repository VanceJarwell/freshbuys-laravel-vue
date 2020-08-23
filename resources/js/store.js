import Vue from 'vue'

import Vuex from 'vuex'

import axios from 'axios'



Vue.use(Vuex)

axios.defaults.baseURL = '/api'



export const store = new Vuex.Store({

    state:{

        token: localStorage.getItem('access_token') || null,

        filter: 'all',

        userDetails: null,

        api_key: process.env.API_KEY,

        isLoaded: false,

        show: false,

        product_name: '',

        price: '',

        quantity:''

    },

    getters: {

        loggedIn(state){

            return state.token !== null

        },

    },

    mutations:{

        retrieveToken(state, token){

            state.token = token

        },

        destroyToken(state){

            state.token = null

        },

        setUserDetails(state,details){

            state.userDetails = details

        },

        SET_PRODUCTS (state, products) {
            state.products = products
        }

    },

    actions: {

        loginUser(context, credentials){
            
            return new Promise((resolve, reject) => {

                axios.post('/login',credentials.data)

                .then(response => {

                    const token = response.data.access_token


                   
                    localStorage.setItem('access_token',token)

                    context.commit('retrieveToken', token)

                    resolve(response)

                })

                .catch(error=>{
                    console.log(error)
                    reject(error)

                })

            })

        },

        destroyToken(context){

            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

            if(context.getters.loggedIn){

                return new Promise((resolve, reject) => {

                    axios.post('/logout')

                    .then(response => {

                        localStorage.removeItem('access_token')

                        context.commit('destroyToken')

                        resolve(response)

                    })

                    .catch(error=>{

                        localStorage.removeItem('access_token')

                        context.commit('destroyToken')

                        reject(error)

                    })

                }) 

            }

        },

        resetPassword(context, credentials){

            credentials.api_key = context.state.api_key

            return new Promise((resolve, reject) => {

                axios.post('/reset-password',credentials)

                .then(response => {

                    

                    resolve(response.data)

                })

                .catch(error=>{

                    console.log(error)

                    reject(error)

                })

            })

        },

        requestResetPassword(context, credentials){

            credentials.api_key = context.state.api_key

            return new Promise((resolve, reject) => {

                axios.post('/request-reset-password',credentials)

                .then(response => {

                    resolve(response.data)

                })

                .catch(error=>{

                    console.log(error)

                    reject(error)

                })

            })

        },

        userDetails(context, credentials){

            return axiosSend(context, credentials,'/user/profile','get')


        },



        /*OPTIONS*/

        getDashboardData(context, credentials){

            return axiosSend(context, credentials,'/dashboard','get')

        },

        // PRODUCTS

        getProductData(context, credentials){

            return axiosSend(context, credentials,'/products','get')

        },

        addProductData(context, credentials){
            console.log("umabot rin dito pre")
            return axiosSend(context, credentials,'/products/add', 'post')

        },

        getProductSupplierData(context, credentials){

            return axiosSend(context, credentials,'/product/suppliers', 'get')

        },


        // SUPPLIES

        getSuppliesData(context, credentials){

            return axiosSend(context, credentials,'/supplies','get')

        },

        addSuppliesData(context, credentials){

            return axiosSend(context, credentials,'/supplies/add', 'post')

        },

        getSuppliesSupplierData(context, credentials){

            return axiosSend(context, credentials,'/supplies/suppliers', 'get')

        }

        

        

        



    }

})



function axiosSend(context, credentials, url, action='get', toStore = false, toStoreFuction=''){

    axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

    return new Promise((resolve, reject) => {

        let act = '';

        if(action==='get'){

            act = axios.get(url);

        }else if(action==='post'){

            act = axios.post(url,credentials.data);

        }

        act.then(response => {

            //const details = response.data

            //console.log(details)

            if(toStore){

                context.commit(toStoreFuction, response.data)

            }

            resolve(response.data)

        })

        .catch(error=>{

            //alert(error)

            console.log(error)

            reject(error)

        })

    })

}