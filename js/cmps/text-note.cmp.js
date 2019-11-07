'use strict';

export default {
    name: 'text-note',
    props: ['note'],
    template: `
        <section class="text-note">
            <h2>{{note.data}}</h2>
            <button class="remove-btn" @click="$emit('removeNote')">X</button>
            <button >edit</button>
        </section>
    `,
}