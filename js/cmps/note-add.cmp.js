'use strict';


export default {
    name: 'note-add',
    template:`
        <section class="note-add">
            <input type="text" placeholder="enter txt" v-model="note.data" @keyup.enter="addNote"/>
            <button @click="changeNoteType('text-note')">text</button>
            <button @click="changeNoteType('img-note')">img</button>
            <button @click="changeNoteType('video-note')">video</button>
        </section>
    `,
    data() {
        return {
            note:{
                data:'',
                type:'text-note'
            }
        }
    },
    methods:{
        addNote(){
            let note = {...this.note};
            this.$emit('added', note);
        },
        changeNoteType(type){
            this.note.type = type
        }
    }
}

