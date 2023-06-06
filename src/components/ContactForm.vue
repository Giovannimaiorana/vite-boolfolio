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
        }
    },
    methods: {
        sendForm() {

            axios.post(`${this.store.baseUrl}/api/contacts`,
                {
                    name: this.name,
                    email: this.email,
                    message: this.message,
                }).then(response => {
                    console.log(response);
                });
        }
    }
}
</script>

<template>
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
        <button type="submit" class="btn btn-primary">Invia</button>
    </form>
</template>

<style lang="scss" scoped></style>