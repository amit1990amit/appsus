'use strict'
import { KeepService } from '../services/keep-service.js'
import noteList from '../cmps/note-list-cmp.js'
import noteAdd from '../cmps/note-add.cmp.js'


export default {
    name: 'keep-app',
    template: `
        <section class="keep-app-container">
        <note-add @added="addNote"></note-add>
        <h2>pined notes</h2>
            <note-list :notes="notesToShow"></note-list>
        </section>
    `,
    data() {
        return {
            notes: [],
            // filterBy: null,
            // selectedNote: null
        }
    },
    computed: {
        notesToShow() {
            return this.notes
                // if (!this.filterBy) return this.books;
                // let regex = new RegExp(`${this.filterBy.byName}`, 'i');
                // return this.books.filter(book => {
                //     let bookPrice = book.listPrice.amount;
                //     return regex.test(book.title) && bookPrice > this.filterBy.fromPrice && bookPrice < this.filterBy.toPrice
                // })
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
        }
    },
    components: {
        noteList,
        noteAdd
    }

};