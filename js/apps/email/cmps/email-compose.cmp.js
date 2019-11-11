'use strict';

import { emailService } from '../../email/services/email.service.js'
import { eventBus } from '../../../services/eventbus-service.js'

export default {
    name: 'email-compose',
    template: `
    <section class="email-compose-container">
		<div class="email-compose-title">
            <P>New Message</P>
            <button class="send-btn" @click="addEmail">Send</button>
            <button class="delete-btn">Delete</button>
            <button class="close-btn" @click="closeCompose">X</button>
        </div>
		<form class="form" @submit="onSubmit">
			<input required name="email" v-model='email.to' placeholder="To:" type="email" autocomplete="off">
            <input required name="CarbonCopy" v-model="email.CarbonCopy" placeholder="Cc:" type="email" autocomplete="off">
            <input required name="BlindCarbonCopy" v-model="email.BlindCarbonCopy" placeholder="Bcc:" type="email" autocomplete="off">
            <input required name="subject" v-model="email.subject" placeholder="Subject" type="text" autocomplete="off">
			<textarea name="message" v-model="email.message" rows="15"></textarea>
		   
        </form>
        <div v-if="isSending" class="loading">Sendig...</div>
    </section>
    `,
    data() {
        return {
            email: {
                to: '',
                CarbonCopy: '',
                BlindCarbonCopy: '',
                subject: '',
                message: '',
            },
            isSending: false
        }
    },
    methods: {
        clearForm() {
            for (let field in this.email) {
                this.email[field] = '';
            }
        },
        addEmail() {
            let email = {...this.email };
            this.$emit('added', email);
        },
        closeCompose() {
            this.$emit('close');
        },
        // onSubmit(evt) {
        //     evt.preventDefault();
        //     this.isSending = true;
        //     setTimeout(() => {
        //             // Build for data
        //             let form = new FormData();
        //             for (let field in this.email) {
        //                 form.append(field, this.email[field]);
        //             }
        //             //     // Send form to server	
        //             //     this.$http.post('/app.php', form).then((response) => {
        //             //         console.log(response);
        //             //         this.clearForm();
        //             //         this.isSending = false;
        //             //     }).catch((e) => {
        //             //         console.log(e)
        //             //     });
        //             // }, 1000);
        //         }
        //     }
        // }
    }
}

// window.app = app;