'use strict';

export default {
    name: 'img-note',
    props: ['note'],
    template: `
        <section class="img-note">
            <img :src="note.data"/>
            <button class="remove-btn" @click.stop.prevent="$emit('removeNote')">X</button>
            <button>edit</button>
        </section>
    `,
} 