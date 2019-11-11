'use strict';

export default {
    name: 'app-nav',
    template: `
    <section class="app-nav-container">
        <router-link class="logo fa fa-fw fa-home" exact to="/"></router-link>
        <button class="app-nav-btn" :class="classObject" @click="toggleNav"> 
            <img src="imgs/menu2-icon.png"/>
            <nav class="flex wrap">
                <router-link exact to="/email">email</router-link>
                <router-link exact to="/keep">keep</router-link>
            </nav>
        </button>
    </section>
    `,
    data() {
        return {
            isClicked: true
        }
    },
    methods: {
        toggleNav() {
            this.isClicked = !this.isClicked;
        },
    },
    computed: {
        classObject() {
            return {
                clicked: this.isClicked
            }
        }
    }
};