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

    </div>
</template>
