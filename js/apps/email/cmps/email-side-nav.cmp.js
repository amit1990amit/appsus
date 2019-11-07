'use strict';

export default {
    name: 'email-side-nav',
    template: `
    <section class="email-side-nav-container">
        <button class="compose-btn">+ Compose</button>
        <a href="#home"><i class="fa fa-fw fa-home"></i>Inbox</a>
        <a href="#services"><i class="fa fa-fw fa-wrench"></i>Starred</a>
        <a href="#clients"><i class="fa fa-fw fa-user"></i>Sent mail</a>
        <a href="#contact"><i class="fa fa-fw fa-envelope"></i>Drafts</a>
    </section>
    `,
    data() {
        return {

        }
    },
    methods: {


    }
}