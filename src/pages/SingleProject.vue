<script>
import axios from 'axios';
import { store } from '../store.js'
export default {
    name: 'Singleproject',
    data() {
        return {
            store,
            project: []
        }
    },
    mounted() {
        const id = this.$route.params.id;
        axios.get(`${this.store.baseUrl}/api/project/${id}`)
            .then(response => {
                this.project = response.data.post;
                console.log(response);
            })

    }
}
</script>

<template>
    <div class="container">
        <div class="row m-5">
            <div class="card p-0">
                <img v-if="project.preview_image" :src="`${this.store.baseUrl}/storage/${this.project.preview_image}`"
                    class="card-img-top" :alt="`${this.project.title}`">
                <img v-else src="http://www.tecno-store.it/wp-content/uploads/immagine-non-disponibile.png"
                    class="card-img-top" alt="Placeholder Image">


                <div class="card-body">
                    <h5 class="card-title">{{ this.project.title }}</h5>
                    <p class="card-text">Descrizione : <br>
                        {{ this.project.description }}
                    </p>
                    <div class="card-text">Tipologia : <br>
                        <p v-if="project.type">{{ this.project.type?.name }}</p>
                        <p v-else>Nessuna tipologia assegnata</p>
                    </div>
                    <span>Tecnologia :</span>
                    <div v-if="project.technologies && project.technologies.length > 0">
                        <span v-for="(technology, index) in this.project.technologies">
                            {{ technology.name }}<span v-if="index < project.technologies.length - 1">/</span>
                        </span>
                    </div>
                    <p v-else>Nessuna tecnologia assegnata</p>

                </div>
            </div>

        </div>

    </div>
</template>