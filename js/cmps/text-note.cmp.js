'use strict';

import toolBar from './toll-bar.cmp.js';

export default {
    name: 'text-note',
    props: ['note'],
    template: `
        <section class="text-note box" :class="{ pinBox: note.isPinned }">
            <h2>{{note.data}}</h2>
            <tool-bar></tool-bar>
        </section>
    `,
    components:{
        toolBar
    }
}