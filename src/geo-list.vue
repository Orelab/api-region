
Vue.component('geo-list', {
    props: ['name'],
    template: `
        <li class="list-group-item">###{{ name }}</li>
    `
});