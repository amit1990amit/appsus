'use strict'

import {storageService} from './storage-service.js'
import {makeId} from './utils-service.js'

const NOTE_KEY = 'note'


export const KeepService = {
    getNoteById,
    getNotes,
    addNote,
    removeNote
}


function getNotes() {
    var notes = storageService.loadFromStorage(NOTE_KEY)
    if (!notes) {
        notes = gNotes;
        storageService.saveToStorage(NOTE_KEY, notes)    
    }
    gNotes = notes;    
    return Promise.resolve(notes);
}

function addNote(note){
    let newNote = createNote(note.data,note.type);
    gNotes.unshift(newNote);
    storageService.saveToStorage(NOTE_KEY,gNotes)
    return Promise.resolve();
}

// function addNote(data,type){
//     let newNote = createNote(data,type);
//     gNotes.unshift(newNote);
//     storageService.saveToStorage(NOTE_KEY,gNotes)
//     return Promise.resolve(notes);
// }

function removeNote(noteId){
    var idx = gNotes.findIndex(note => note.id === noteId);
    if (idx !== -1) gNotes.splice(idx,1);
    storageService.saveToStorage(NOTE_KEY,gNotes)
    return Promise.resolve();
}



function getNoteById(noteId) {
    gNotes = storageService.loadFromStorage(NOTE_KEY);
    var note = gNotes.find(note => note.id === noteId)
    return Promise.resolve(note);
}

function createNote(data,type){
    return {
        id: makeId(7),
        data: data,
        color: 'white',
        isPinned: false,
        type: type
    }
}

let gNotes = [
    createNote('aaaaa','text-note'),
    createNote('bbbbb','text-note'),
    createNote('https://www.slashfilm.com/wp/wp-content/images/avatar-2-story.jpg','img-note')
];