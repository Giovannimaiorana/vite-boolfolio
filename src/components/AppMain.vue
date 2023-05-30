<script>
import axios from 'axios';
export default {
    name: "AppMain",

    data() {
        return {
            projects: [],
            baseUrl: 'http://localhost:8000',
        }
    },
    methods: {
        getProjects() {

            axios.get(`${this.baseUrl}/api/projects`)
                .then(response => {
                    console.log(response);
                    this.projects = response.data.results;
                });
        }
    },
    mounted() {
        this.getProjects();
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-3" v-for="project in projects">
                <div class="card mb-2" style="width: 18rem;">
                    <img v-if="project.preview_image" :src="`${this.baseUrl}/storage/${project.preview_image}`"
                        class="card-img-top" />
                    <img v-else src="https://cdn.icon-icons.com/icons2/1462/PNG/512/120nophoto_100007.png"
                        class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">{{ project.title }}</h5>
                        <p class="card-text">{{ project.description }}</p>
                        <a href="#" class="btn btn-primary">Visualizza altro</a>
                    </div>
                </div>

            </div>

        </div>

    </div>
</template>
