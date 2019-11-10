'use strict';

export default {
    name: 'email-preview',
    props: ['email'],
    template: `
        <section class="email-preview-container flex">
            <div style="flex-grow: 1">
                <h3>{{ email.from}}</h3>
            </div>
            <div style="flex-grow: 5">
                <h1>{{ email.subject}}</h1>
            </div>
            <div style="flex-grow: 1">
                <h3>{{ email.sentAt}}</h3>
            </div>
        
        
            <!-- <router-link :to="emailDetailsLink">
                 
            </router-link> -->
        </section>
    `,
    computed: {
        currencyIcon() {
            let currencyCode = this.book.listPrice.currencyCode;
            if (currencyCode === 'EUR') return '€';
            if (currencyCode === 'ILS') return '₪';
            if (currencyCode === 'USD') return '$';
        },
        bookDetailsLink() {
            return `/book/${this.book.id}`
        }
    }
}