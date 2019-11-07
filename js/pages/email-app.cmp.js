'use strict';

import { emailService } from '../apps/email/services/email.service.js'
import emailFilter from '../apps/email/cmps/email-filter.cmp.js'
import emailSideNav from '../apps/email/cmps/email-side-nav.cmp.js'
// import bookList from '../cmps/book-list.cmp.js'

export default {
    name: 'email-app',
    template: `
        <section class="email-app-container">
            <!-- <email-list></email-list> -->
            <!-- <email-details></email-details> -->
            <!-- <email-status></email-status> -->
            <email-filter></email-filter>
            <email-side-nav></email-side-nav>
            <!-- <email-compose></email-compose> -->
        </section>
        
    `,
    components: {
        emailFilter,
        emailSideNav
    }
}