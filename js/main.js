'use strict';

import router from './routes.js';
import appHeader from './cmps/app-header.cmp.js';

new Vue({
    router,
    el: '#appsus-app',
    template: `
    <section>
        <app-header></app-header>
        <router-view></router-view>
    </section>
    `,
    components: {
        appHeader,
    }
});