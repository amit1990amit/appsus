'use strict';

export default {
    name: 'text-note',
    props: ['note'],
    template: `
        <section class="text-note">
            <h2>{{note.data}}</h2>
            <button class="remove-btn" @click="$emit('removeNote')">X</button>
            <input type="text" class="text-input" @keyup.enter="$emit('editData')">
            <input class="color-input" @change="$emit('changeColor')" type="color"/>
            <button @click="$emit('togglePinNote')" >pin</button>
        </section>
    `,
}