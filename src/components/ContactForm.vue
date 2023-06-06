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
            errors: {},
        }
    },
    methods: {
        sendForm() {
            this.success = false;
            this.sending = true;
            this.errors = {};

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
                    } else {
                        this.errors = response.data.errors;
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
            <input type="email" class="form-control" id="email" v-model="email" :class="{ 'is-invalid': errors.email }">
            <div class="invalid-feedback" v-for="error in errors.email">
                {{ error }}
            </div>

        </div>
        <div class="mb-3">
            <label for="name" class="form-label">Il tuo Nome </label>
            <input type="text" class="form-control" id="name" v-model="name" :class="{ 'is-invalid': errors.name }">
            <div class="invalid-feedback" v-for="error in errors.name">
                {{ error }}
            </div>
        </div>
        <div class="mb-3 ">
            <label for="message">Il tuo messaggio</label>
            <textarea class="form-control" placeholder="Scrivi il tuo Messaggio" id="message" v-model="message"
                :class="{ 'is-invalid': errors.message }"></textarea>
            <div class="invalid-feedback" v-for="error in errors.message">
                {{ error }}
            </div>
        </div>
        <button type="submit" class="btn btn-primary" :disabled="sending">
            {{ sending ? 'Invio in corso...' : 'Invia Messaggio' }}
        </button>
    </form>
</template>

<style lang="scss" scoped></style>