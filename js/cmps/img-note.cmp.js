'use strict';

export default {
    name: 'img-note',
    props: ['data'],
    template: `
        <section class="img-note">
            <img :src="data"/>
            <button class="remove-btn" @click.stop.prevent="$emit('removeNote')">X</button>
        </section>
    `,
}