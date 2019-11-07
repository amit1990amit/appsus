'use strict';

export default {
    name: 'img-note',
    props: ['note'],
    template: `
        <section class="img-note">
            <iframe :src="note.data" ></iframe>
            <button class="remove-btn" @click="$emit('removeNote')">X</button>
        </section>
    `,
}




