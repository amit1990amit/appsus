'use strict';


export default {
    name: 'note-add',
    template:`
        <section class="note-add">
            <input type="text" :placeholder="shownPlaceholder" v-model="note.data" @keyup.enter="addNote"/>
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
            this.note.type = type,
            this.note.data = ''

        }
    },
    computed: {
        shownPlaceholder() {
            if (this.note.type === 'text-note') return `What's on your mind?`;
            if (this.note.type === 'img-note') return `Enter image URL`;
            if (this.note.type === 'video-note') return `Enter video URL`;
            if (this.note.type === 'todo-note') return `Enter comma separated list`;
        }
    },
    mounted() {
        this.changeNoteType('textNote')
    }
}

