'use strict';

import {eventBus} from '../services/eventbus-service.js'

export default {
    name: 'toolbar',
    props: ['note'],
    template: `
        <section class="toolbar">
            <button class="remove-btn" @click="emitRemove">X</button>
            <input type="text" class="text-input" @keyup.enter="emitChangeData">
            <input class="color-input" @change="emitChangeColor" type="color"/>
            <button @click="emitTogglePin" :class="{ glow: note.isPinned }"><i class="fas fa-thumbtack"></i></button>    
        </section>
    `,
    methods:{
        emitRemove() {
            eventBus.$emit('remove',this.note)
        },
        emitChangeColor() {
            eventBus.$emit('changeColor',this.note)
        },
        emitChangeData(){
            eventBus.$emit('changeData',this.note)
        },
        emitTogglePin(){
            eventBus.$emit('togglePin',this.note)
        }
    }
}