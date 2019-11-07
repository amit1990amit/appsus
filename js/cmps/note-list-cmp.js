'use strict'

import notePreview from './note-preview.cmp.js'


export default {
    name: 'note-list',
    props: ['notes'],
    template:`
        <section>
            <div class="note-list-container">
                <div v-for="currNote in notes">
                    <note-preview :note="currNote" @click.native="onSelectNote(currNote.id)" :key="currNote.id"></note-preview>
                
                </div>
                
            </div >
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
        }
    },
    components:{
        notePreview
    }
}

