
import $ from 'jquery'

window.jQuery = $;
window.$ = $;

import boostrap from 'bootstrap'
import Vue from 'vue'

//import VueRouter from 'vue-router'
//import App from './App.vue'

//Vue.use(VueRouter);


var API = {

    url: 'https://geo.api.gouv.fr',

    loadRegions: function()
    {
        $.ajax(API.url + '/regions')
            .done(function(data)
            {
                console.log(data);
                console.log(app);
                app.regions = data;
                app.communes = {};
            });
    },

    loadDepartments: function(e)
    {
        $.ajax(API.url + '/departements?codeRegion='+e.target.value)
            .done(function(data)
            {
                app.departements = data;
                app.communes = {};
            });
    },

    loadCommunes: function(e)
    {
        $.ajax(API.url + '/communes?codeDepartement='+e.code)
            .done(function(data)
            {
                app.communes = data;
            });
    }
};



Vue.component('geo-list', {
    props: ['name'],
    template: `
        <li class="list-group-item">{{ name }}</li>
    `
});

/*

const Home = { template: '<div>home</div>' }
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
      { path: '/', component: Home },
      { path: '/foo', component: Foo },
      { path: '/bar', component: Bar }
    ]
});

*/

var app = new Vue({
    el: '#app',
    data: {
        regions: {},
        departements: {},
        communes: {}
    },
//    router,
//    render: function(){return App},
    methods: {
        openDepartments: API.loadDepartments,
        openCommunes: API.loadCommunes
    },
    created: API.loadRegions
});









