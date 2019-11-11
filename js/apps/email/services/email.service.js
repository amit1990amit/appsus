'use strict';

import { storageService } from '../../../services/storage-service.js'
import { makeId } from '../../../services/utils-service.js'

export const emailService = {
    getEmails,
    getEmailById,
    getNearEmailsIds,
    addEmail,
    removeEmail
}

const EMAILS_KEY = 'emails'

function getEmails() {
    let emails = storageService.loadFromStorage(EMAILS_KEY)
    if (!emails) {
        emails = gEmails;
        storageService.saveToStorage(EMAILS_KEY, emails)
    }
    gEmails = emails;
    return Promise.resolve(emails);
}

function getEmailById(emailId) {
    gEmails = storageService.loadFromStorage(EMAILS_KEY);
    let email = gEmails.find(email => email.id === emailId)
    return Promise.resolve(email);
}

function getNearEmailsIds(emailId) {
    let idx = gEmails.findIndex(email => email.id === emailId);
    let nextIdx = idx + 1;
    if (nextIdx === gEmails.length) nextIdx = 0;
    let next = gEmails[nextIdx].id;
    let prevIdx = idx - 1;
    if (prevIdx === -1) prevIdx = gEmails.length - 1;
    let prev = gEmails[prevIdx].id;
    return { prev, next };
}

function addEmail(email) {
    let newEmail = createEmail(email);
    gEmails.unshift(newEmail);
    storageService.saveToStorage(EMAILS_KEY, gEmails);
}

function removeEmail(emailId) {
    var idx = gEmails.findIndex(email => email.id === emailId);
    if (idx !== -1) gEmails.splice(idx, 1);
    storageService.saveToStorage(EMAILS_KEY, gEmails);
    return Promise.resolve();
}

// function createEmail(email) {
//     let defaultNote = {
//         id: makeId(7),
//         isPinned: false,
//         color: note.color || "#EBCFB2"
//     }

//     note = {...note, ...defaultNote }
//     note.copydata = note.data
//     if (note.type === 'todo-note') {
//         if (typeof(note.data) === typeof("string")) {
//             let todos = note.data.split(', ');
//             let fullTodos = todos.map(todo => ({ txt: todo, isDone: false, id: makeId(7) }))
//             note.data = fullTodos
//         }
//     }
//     if (note.type === 'video-note') {
//         let videoId = note.data.split('=')[1];
//         note.data = 'https://www.youtube.com/embed/' + videoId;
//     }

//     return note;
// }

var gEmails = [{
        "id": "OXeMG8wNskc",
        "from": "dortzabari@gmail.com",
        "subject": "Saying hello",
        "body": "Hi, How are you?",
        "isRead": true,
        "sentAt": 1551133930594
    },
    {
        "id": "OXeMG8wNtjk",
        "from": "Dor",
        "subject": "Assignments",
        "body": "Hi, 1. blablabla 2. blalala",
        "isRead": false,
        "sentAt": 1551133930596
    },
    {
        "id": "OXeMG8wNtjf",
        "from": "Dor",
        "subject": "Assignments",
        "body": `"Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Consequuntur officiis aut, quasi ab quia dolorem quisquam, 
        sed repellendus eaque dolore ex debitis. 
        Quod eligendi cupiditate natus eos architecto eaque exercitationem!"`,
        "isRead": false,
        "sentAt": 1551133930596
    },
    {
        "id": "OXeMG8wNtjf",
        "from": "Dor",
        "subject": "Assignments",
        "body": `"Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Consequuntur officiis aut, quasi ab quia dolorem quisquam, 
        sed repellendus eaque dolore ex debitis. 
        Quod eligendi cupiditate natus eos architecto eaque exercitationem!"`,
        "isRead": false,
        "sentAt": 1551133930596
    },
    {
        "id": "OXeMG8wNtjf",
        "from": "Dor",
        "subject": "Assignments",
        "body": `"Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Consequuntur officiis aut, quasi ab quia dolorem quisquam, 
        sed repellendus eaque dolore ex debitis. 
        Quod eligendi cupiditate natus eos architecto eaque exercitationem!"`,
        "isRead": false,
        "sentAt": 1551133930596
    },
    {
        "id": "OXeMG8wNtjf",
        "from": "Dor",
        "subject": "Assignments",
        "body": `"Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Consequuntur officiis aut, quasi ab quia dolorem quisquam, 
        sed repellendus eaque dolore ex debitis. 
        Quod eligendi cupiditate natus eos architecto eaque exercitationem!"`,
        "isRead": false,
        "sentAt": 1551133930596
    },
    {
        "id": "OXeMG8wNtjf",
        "from": "Dor",
        "subject": "Assignments",
        "body": `"Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Consequuntur officiis aut, quasi ab quia dolorem quisquam, 
        sed repellendus eaque dolore ex debitis. 
        Quod eligendi cupiditate natus eos architecto eaque exercitationem!"`,
        "isRead": false,
        "sentAt": 1551133930596
    },
    {
        "id": "OXeMG8wNtjf",
        "from": "Dor",
        "subject": "Assignments",
        "body": `"Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Consequuntur officiis aut, quasi ab quia dolorem quisquam, 
        sed repellendus eaque dolore ex debitis. 
        Quod eligendi cupiditate natus eos architecto eaque exercitationem!"`,
        "isRead": false,
        "sentAt": 1551133930596
    },
    {
        "id": "OXeMG8wNtjf",
        "from": "Dor",
        "subject": "Assignments",
        "body": `"Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Consequuntur officiis aut, quasi ab quia dolorem quisquam, 
        sed repellendus eaque dolore ex debitis. 
        Quod eligendi cupiditate natus eos architecto eaque exercitationem!"`,
        "isRead": false,
        "sentAt": 1551133930596
    },
    {
        "id": "OXeMG8wNtjf",
        "from": "Dor",
        "subject": "Assignments",
        "body": `"Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Consequuntur officiis aut, quasi ab quia dolorem quisquam, 
        sed repellendus eaque dolore ex debitis. 
        Quod eligendi cupiditate natus eos architecto eaque exercitationem!"`,
        "isRead": false,
        "sentAt": 1551133930596
    },
    {
        "id": "OXeMG8wNtjf",
        "from": "Dor",
        "subject": "Assignments",
        "body": `"Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Consequuntur officiis aut, quasi ab quia dolorem quisquam, 
        sed repellendus eaque dolore ex debitis. 
        Quod eligendi cupiditate natus eos architecto eaque exercitationem!"`,
        "isRead": false,
        "sentAt": 1551133930596
    },
    {
        "id": "OXeMG8wNtjf",
        "from": "Dor",
        "subject": "Assignments",
        "body": `"Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Consequuntur officiis aut, quasi ab quia dolorem quisquam, 
        sed repellendus eaque dolore ex debitis. 
        Quod eligendi cupiditate natus eos architecto eaque exercitationem!"`,
        "isRead": false,
        "sentAt": 1551133930596
    },
    {
        "id": "OXeMG8wNtjf",
        "from": "Dor",
        "subject": "Assignments",
        "body": `"Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Consequuntur officiis aut, quasi ab quia dolorem quisquam, 
        sed repellendus eaque dolore ex debitis. 
        Quod eligendi cupiditate natus eos architecto eaque exercitationem!"`,
        "isRead": false,
        "sentAt": 1551133930596
    },
    {
        "id": "OXeMG8wNtjf",
        "from": "Dor",
        "subject": "Assignments",
        "body": `"Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Consequuntur officiis aut, quasi ab quia dolorem quisquam, 
        sed repellendus eaque dolore ex debitis. 
        Quod eligendi cupiditate natus eos architecto eaque exercitationem!"`,
        "isRead": false,
        "sentAt": 1551133930596
    },
    {
        "id": "OXeMG8wNtjf",
        "from": "Dor",
        "subject": "Assignments",
        "body": `"Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Consequuntur officiis aut, quasi ab quia dolorem quisquam, 
        sed repellendus eaque dolore ex debitis. 
        Quod eligendi cupiditate natus eos architecto eaque exercitationem!"`,
        "isRead": false,
        "sentAt": 1551133930596
    },
    {
        "id": "OXeMG8wNtjf",
        "from": "Dor",
        "subject": "Assignments",
        "body": `"Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Consequuntur officiis aut, quasi ab quia dolorem quisquam, 
        sed repellendus eaque dolore ex debitis. 
        Quod eligendi cupiditate natus eos architecto eaque exercitationem!"`,
        "isRead": false,
        "sentAt": 1551133930596
    },
    {
        "id": "OXeMG8wNtjf",
        "from": "Dor",
        "subject": "Assignments",
        "body": `"Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Consequuntur officiis aut, quasi ab quia dolorem quisquam, 
        sed repellendus eaque dolore ex debitis. 
        Quod eligendi cupiditate natus eos architecto eaque exercitationem!"`,
        "isRead": false,
        "sentAt": 1551133930596
    },
    {
        "id": "OXeMG8wNtjf",
        "from": "Dor",
        "subject": "Assignments",
        "body": `"Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Consequuntur officiis aut, quasi ab quia dolorem quisquam, 
        sed repellendus eaque dolore ex debitis. 
        Quod eligendi cupiditate natus eos architecto eaque exercitationem!"`,
        "isRead": false,
        "sentAt": 1551133930596
    }
];