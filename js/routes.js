import emailApp from './pages/email-app.cmp.js';
import keepApp from './pages/keep-app.cmp.js';
import homePage from './pages/home-page.cmp.js';
import noteEdit from './pages/note-edit.cmp.js';
import emailDetails from './apps/email/pages/email-details.cmp.js';

const routes = [{
        path: '/',
        component: homePage
    },
    {
        path: '/keep',
        component: keepApp
    },
    {
        path: '/keep/:noteId',
        component: noteEdit
    },
    {
        path: '/email',
        component: emailApp
    },
    {
        path: '/email/:id',
        component: emailDetails
    }
];

const router = new VueRouter({ routes });
export default router;