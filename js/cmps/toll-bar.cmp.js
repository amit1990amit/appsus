'use strict';

export default {
    name: 'toolbar',
    template: `
        <section class="toolbar">
            <button class="remove-btn" @click="$emit('removeNote')">X</button>
            <input type="text" class="text-input" @keyup.enter="$emit('editData')">
            <input class="color-input" @change="$emit('changeColor')" type="color"/>
            <button @click="$emit('togglePinNote')" >pin</button>    
        </section>
    `,
}