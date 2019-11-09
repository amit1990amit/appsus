'use strict'

import notePreview from './note-preview.cmp.js'
import textNote from './text-note.cmp.js'
import imgNote from './img-note.cmp.js'
import videoNote from './video-note.cmp.js'
import todoNote from './todo-note.cmp.js'

import {KeepService} from '../services/keep-service.js'


 
export default {
    name: 'note-list',
    props: ['notes'],
    template:`
        <section class="note-list-container">
            <!-- <note-preview v-for="currNote in notes" 
                            :note="currNote" 
                            @click.native="onSelectNote(currNote.id)" 
                            :key="currNote.id" /> -->
            <component v-for="currNote in notes" 
                        class="note-preview-container" :style="{'background-color': currNote.color}"
                        :is="currNote.type"
                        :key="currNote.id" 
                        @removeNote="onRemoveNote(currNote.id)"
                        @editData="onEditData(currNote)"
                        @changeColor="onChangeColor(currNote)" 
                        @togglePinNote="onTogglePinNote(currNote)"
                        @click.native="onSelectNote(currNote.id)" 
                        :note="currNote" />
        </section>
    `, 
    // data() {
    //     return {
    //         selectedBook: null
    //     }
    // },
    methods: {
        onSelectNote(noteId) {
            console.log(noteId)
            // this.selectedBook = bookId;
            // this.$emit('selected', this.selectedBook);
        },
        onRemoveNote(noteId){
            console.log('noteId', noteId)
            KeepService.removeNote(noteId)
        },
        onChangeColor(note){
            note.color = event.target.value
            KeepService.updateNote(note)
        },
        onEditData(note){
            note.data = event.target.value;
            KeepService.updateNote(note) 
            // .then(() => KeepService.getNotes())
            // .then(notes => this.notes = notes)
            
        },
        onTogglePinNote(note){
            if(note.isPinned === false){
                KeepService.pinNote(note)
                // .then(() => KeepService.getNotes())
                // .then(notes => this.notes = notes)

            } else {
                KeepService.unpinNote(note)
                // .then(() => KeepService.getNotes())
                // .then(notes => this.notes = notes)

            }
        }
    },
    components:{
        notePreview,
        textNote,
        imgNote,
        videoNote,
        todoNote
        
    }
}



