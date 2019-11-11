'use strict';

import '../cmps/long-text.cmp.js'

export default {
    name: 'email-preview',
    props: ['email'],
    template: `
            <router-link :to="emailDetailsLink" class="email-preview flex space-between align-center" :class="classObject" @click.native="emailClicked">
                <p>{{ email.from}}</p>
                <p>{{ email.subject}}- <long-text :txt="email.body"></long-text></p>
                <p>{{toTimeFormat()}}</p>
            </router-link>
    `,
    methods: {
        toTimeFormat() {
            return Date(this.email.sentAt);
        },
        emailClicked() {
            this.email.isRead = false;
        },
    },
    computed: {
        emailDetailsLink() {
            return `/email/${this.email.id}`
        },
        classObject() {
            return { "isUnread": this.email.isRead }
        }
    }
}