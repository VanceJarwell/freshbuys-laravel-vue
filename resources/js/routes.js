import Vue from 'vue';

import VueRouter from 'vue-router';



Vue.use(VueRouter)

//TEMPLATES

import App from './../views/ordering/App'

import NotFound from './../views/ordering/errors/404'



//BACKEND

import Dashboard from './../views/ordering/dashboard/Index'

import Login from '../views/ordering/auth/Login'

import Logout from '../views/ordering/auth/Logout'

import PlaceOrder from '../views/ordering/dashboard/PlaceOrder'

import Products from '../views/ordering/products/Products'

import ProductAdd from '../views/ordering/products/components/ProductAdd'

import ProductRecords from '../views/ordering/products/components/ProductRecords'

import Supplies from '../views/ordering/supplies/Supplies'

import SuppliesAdd from '../views/ordering/supplies/components/SuppliesAdd'

import SuppliesRecord from '../views/ordering/supplies/components/SuppliesRecord'



export const router = new VueRouter({

    mode: 'history',

    routes: [

        //BACKEND

        {

            path: '/',

            name: 'home',

            component: Dashboard,

            meta: {

                title: 'Dashboard',

            }

        },

        {

            path: '/login',

            name: 'login',

            component: Login,

            meta: {

                title: 'Login',

            }

        },

        {

            path: '/logout',

            name: 'logout',

            component: Logout,

            meta: {

                title: 'Login',

            }

        },

        {

            path: '/products',

            name: 'products',

            component: Products,

            meta:{
                
                title: 'Products'

            }

        },

        {
            path: '/products/add',

            name: 'products_add',

            component: ProductAdd,

            meta:{

                title: 'Products Add'

            }

        },

        {
            path: '/products/records',

            name: 'products_record',

            component: ProductRecords,

            meta:{

                title: 'Products Records'

            }

        },

        {
            path: '/supplies',

            name: 'supplies',

            component: Supplies,

            meta:{

                title: 'Supplies'

            }
        },

        {
            path: '/supplies/add',

            name: 'supplies_add',

            component: SuppliesAdd,

            meta:{

                title: 'Supplies Add'

            }

        },

        {
            path: '/supplies/records',

            name: 'supplies_record',

            component: SuppliesRecord,

            meta:{

                title: 'Supplies Records'

            }

        },
        
        {
            path: '/place_order',
        
            name: 'place_order',
        
            component: PlaceOrder,

            meta:{
                
                title: 'Place Order'

            }
        },

        {

            path: '/*',

            name: '404',

            component: NotFound,

            meta: {

                title: '404 Page Not Found',

            }

        },

    ],

});





export default router;