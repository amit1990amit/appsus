'use strict';

export default {
    name: 'text-note',
    props: ['data'],
    template: `
        <section class="text-note">
            <h2>{{data}}</h2>
        </section>
    `,
}