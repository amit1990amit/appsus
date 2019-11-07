'use strict';

export default {
    name: 'img-note',
    props: ['data'],
    template: `
        <section class="img-note">
            <iframe :src="data" ></iframe>
            <button class="remove-btn" @click="$emit('removeNote')">X</button>
        </section>
    `,
}




