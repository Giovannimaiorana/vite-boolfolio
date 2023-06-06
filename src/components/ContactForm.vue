<script>
import axios from 'axios';
import { store } from '../store.js';
export default {
    name: 'ContactForm',
    data() {
        return {
            store,
            name: '',
            email: '',
            message: '',
            success: false,
            sending: false,
        }
    },
    methods: {
        sendForm() {
            this.success = false;
            this.sending = true;

            axios.post(`${this.store.baseUrl}/api/contacts`,
                {
                    name: this.name,
                    email: this.email,
                    message: this.message,
                }).then(response => {
                    if (response.data.success) {
                        //reset form
                        this.name = '';
                        this.email = '';
                        this.message = '';
                        this.success = true;
                        this.sending = false;


                    }
                }).catch(error => {
                    this.sending = false;
                });
        }
    }
}
</script>

<template>
    <div class="alert alert-success" role="alert" v-if="success">
        Grazie per averci contattato
    </div>
    <form @submit.prevent="sendForm()">
        <div class="mb-3">
            <label for="email" class="form-label">La tua Email</label>
            <input type="email" class="form-control" id="email" v-model="email">
        </div>
        <div class="mb-3">
            <label for="name" class="form-label">Il tuo Nome </label>
            <input type="text" class="form-control" id="name" v-model="name">
        </div>
        <div class="mb-3 ">
            <label for="message">Il tuo messaggio</label>
            <textarea class="form-control" placeholder="Scrivi il tuo Messaggio" id="message" v-model="message"></textarea>
        </div>
        <button type="submit" class="btn btn-primary" :disabled="sending">
            {{ sending ? 'Invio in corso...' : 'Invia Messaggio' }}
        </button>
    </form>
</template>

<style lang="scss" scoped></style>