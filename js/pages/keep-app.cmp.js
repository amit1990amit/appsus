'use strict'
import { KeepService } from '../services/keep-service.js'
import noteList from '../cmps/note-list-cmp.js'
import noteAdd from '../cmps/note-add.cmp.js'
import searchNote from '../cmps/search-note.cmp.js'


export default {
    name: 'keep-app',
    template: `
        <section class="keep-app-container container">
        <search-note  @filtered="setFilter"></search-note>
        <note-add @added="addNote"></note-add>
        <h2>pined notes</h2>
            <note-list :notes="notesToShow"></note-list>
        </section>
    `,
    data() {
        return {
            notes: [],
            filterBy: null,
            // selectedNote: null
        }
    },
    computed: {
        notesToShow() {
            //return this.notes
            if(!this.filterBy) return this.notes;
            let regex = new RegExp(`${this.filterBy.data}`, 'i');
            return this.notes.filter(note => {
                return regex.test(note.data)
            })
        }
    },
    created() {
        KeepService.getNotes()
            .then(notes => this.notes = notes)
    },
    methods: {
        addNote(note) {
            KeepService.addNote(note)
                .then(() => KeepService.getNotes())
                .then(notes => this.notes = notes)
        },
        setFilter(filter){
            this.filterBy = filter
        }
    },
    components: {
        noteList,
        noteAdd,
        searchNote
    }

};