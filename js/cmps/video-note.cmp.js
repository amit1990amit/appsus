'use strict';

export default {
    name: 'img-note',
    props: ['note'],
    template: `
        <section class="img-note">
            <iframe :src="note.data" ></iframe>
            <button class="remove-btn" @click="$emit('removeNote')">X</button>
            <input type="text" class="text-input" @keyup.enter="$emit('editData')">
            <input class="color-input" @change="$emit('changeColor')" type="color"/>
        </section>
    `,
}




