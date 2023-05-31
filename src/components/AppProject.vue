<script>
import { store } from '../store.js';
export default {
    name: 'AppProject',
    props: ['project'],
    data() {
        return {
            store
        }
    },
    methods: {
        troncateText(text) {
            if (text && text.length > 10) {
                return text.substr(0, 50) + `...`
            }
        }
    }
};

</script>

<template>
    <div class="card mb-2" style="width: 18rem;">
        <img v-if="project.preview_image" :src="`${this.store.baseUrl}/storage/${project.preview_image}`"
            class="card-img-top" />
        <img v-else src="http://www.tecno-store.it/wp-content/uploads/immagine-non-disponibile.png" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">tecnologia: <br />
                <span v-for="technology in project.technologies">
                    {{ technology?.name }}<br>
                </span>
            </p>
            <p class="card-text">tipo: <br />
                <span>{{ project.type?.name }}</span>
            </p>
            <p class="card-text">{{ troncateText(project.description) }}</p>
            <a href="#" class="btn btn-primary">Visualizza altro</a>
        </div>
    </div>
</template>