import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Showerror from "./components/Custom/Showerror";
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Swal from 'sweetalert2'
import Dashboard from './components/Users/Dashboard'
import logout from './components/Auth/Logout'
/* BLog Group */

import VueSidebarMenu from 'vue-sidebar-menu'


Vue.config.productionTip = false;
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);
Vue.use(VueAxios, axios)
Vue.use(VueRouter);
Vue.use(Showerror);
Vue.use(VueSidebarMenu);
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import 'vue-select/dist/vue-select.css';
require('bootstrap');
import vSelect from 'vue-select'

Vue.component('v-select', vSelect);


import 'vue-phone-number-input/dist/vue-phone-number-input.css';
import './assets/asset/main.css';

import fa from './lang/fa/website'
import en from './lang/en/website'
 // Pages
 Vue.prototype.$url ='http://127.0.0.1:8000/api/';
 Vue.prototype.$storage ='http://127.0.0.1:8000/';
 Vue.prototype.$axios =axios;
 Vue.prototype.$swal =Swal;

import 'froala-editor/js/plugins.pkgd.min.js';
//Import third party plugins
import 'froala-editor/js/third_party/embedly.min';
import 'froala-editor/js/third_party/font_awesome.min';
import 'froala-editor/js/third_party/font_awesome.min';
import 'froala-editor/js/third_party/spell_checker.min';
import 'froala-editor/js/third_party/image_tui.min';
// Import Froala Editor css files.
import 'froala-editor/css/froala_editor.pkgd.min.css';

// Import and use Vue Froala lib.
import VueFroala from 'vue-froala-wysiwyg'
import VModal from 'vue-js-modal'

Vue.use(VModal)


Vue.use(VueFroala)
Vue.config.productionTip = false

const messages = {    'fa':fa,    'en': en};

const i18n = new VueI18n({    locale: 'fa',messages});
// this.$lang.setLang('fa');

const router=new  VueRouter({
    mode:'history',
    routes:[
        {
        path:'/login',
        name:'Login',
             component:Login
        },
        {
            path:'/Register',
            name:'Register',
            component:Register
        },
        ,
        {
            path:'/dashboard',
            name:'UserClinet',
            component:Dashboard
        }
        ,
        {
            path:'/logout',
            name:'logout',
            component:logout
        },

    ]
})

new Vue({
    i18n,
    router,
  render: h => h(App),
}).$mount('#app')
