'use strict';

export default {
    name: 'img-note',
    props: ['note'],
    template: `
        <section class="img-note">
            <img :src="note.data"/>
            <button class="remove-btn" @click.stop.prevent="$emit('removeNote')">X</button>
            <input type="text" class="text-input" @keyup.enter="$emit('editData')">
            <input class="color-input" @change="$emit('changeColor')" type="color"/>
            <button @click="$emit('togglePinNote')" >pin</button>
        </section>
    `,
} 