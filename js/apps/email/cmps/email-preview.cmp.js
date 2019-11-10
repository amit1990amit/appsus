'use strict';

import '../cmps/long-text.cmp.js'

export default {
    name: 'email-preview',
    props: ['email'],
    template: `
            <router-link :to="emailDetailsLink" class="email-preview flex space-between align-center">
                <p>{{ email.from}}</p>
                <p>{{ email.subject}}- <long-text :txt="email.body"></long-text></p>
                <p>{{toHoursFormat()}}</p>
            </router-link>
    `,
    methods: {
        toHoursFormat() {
            return Date(this.email.sentAt);
        }
    },
    computed: {
        emailDetailsLink() {
            return `/email/${this.email.id}`
        }
    }
}