'use strict';

import { emailService } from '../apps/email/services/email.service.js'
import emailFilter from '../apps/email/cmps/email-filter.cmp.js'
import emailSideNav from '../apps/email/cmps/email-side-nav.cmp.js'
import emailList from '../apps/email/cmps/email-list.cmp.js'
import emailCompose from '../apps/email/cmps/email-compose.cmp.js'

export default {
    name: 'email-app',
    template: `
        <section class="email-app-container">
            <!-- <email-status></email-status> -->
            <email-filter @filtered="setFilter"></email-filter>
            <div class="row">
                <email-side-nav @compose="toggleEmailList"></email-side-nav>
                <email-compose v-if="this.composeClicked" @close="toggleEmailList"></email-compose>
                <email-list v-if="!this.composeClicked" :emails="emailsToShow" @selected="selectEmail"></email-list>
            </div>
        </section>
        
    `,
    data() {
        return {
            emails: [],
            filterBy: null,
            selectedEmail: null,
            composeClicked: false
        }
    },
    methods: {
        selectEmail(emailId) {
            emailService.getEmailById(emailId)
                .then(email => this.selectedEmail = email)
        },
        setFilter(filter) {
            this.filterBy = filter;
        },
        hideDetails() {
            this.selectedEmail = null;
        },
        toggleEmailList() {
            this.composeClicked = !this.composeClicked;
        }
    },
    computed: {
        emailsToShow() {
            if (!this.filterBy) return this.emails;
            let regex = new RegExp(`${this.filterBy.bySubject}`, 'i');
            return this.emails.filter(email => {
                let emailIsRead = email.isRead;
                return regex.test(email.subject)
            })
        }
    },
    created() {
        emailService.getEmails()
            .then(emails => this.emails = emails)
    },
    components: {
        emailFilter,
        emailSideNav,
        emailList,
        emailCompose
    }
}