'use strict';

import { emailService } from '../../email/services/email.service.js'
import '../cmps/long-text.cmp.js'
import { eventBus } from '../../../services/eventbus-service.js'

export default {
    name: 'email-details',
    template: `
        <section  v-if="email" class="email-details-container">
            <div class="navigate">
                <router-link :to="'/email/' + nearEmailsIds.prev">&lt;</router-link>
                <router-link :to="'/email/' + nearEmailsIds.next">&gt;</router-link>
                <button>Delete</button>
                <router-link exact to="/email">Back</router-link>
                <hr>
            </div>
            <div class=" email-details flex space-between align-center">
                <div class="info">
                    <h3>{{ email.subject }}</h3> 
                    <h4>{{ email.from }}</h4>
                    <p>{{email.body}}</p>
                </div>
            </div>
        </section>
    `,
    data() {
        return {
            email: null,
            emailId: null,
            nearEmailsIds: null
        }
    },
    computed: {
        // readingLvl() {
        //     let pages = this.book.pageCount;
        //     if (pages > 500) return 'Long Reading';
        //     else if (pages > 200) return 'Decent Reading';
        //     else if (pages < 100) return 'Light Reading'
        // }
    },
    methods: {
        loadEmail() {
            this.emailId = this.$route.params.id;
            emailService.getEmailById(this.emailId)
                .then(email => {
                    this.email = email;
                    this.nearEmailsIds = emailService.getNearEmailsIds(email.id);
                })
        }
    },
    created() {
        this.loadEmail();
        window.scrollTo(0, 0);
    },
    watch: {
        '$route.params.id' () {
            this.loadEmail();
        }
    }
}