<script>
import axios from 'axios';
import AppProject from './AppProject.vue';
import { store } from '../store.js';
export default {
    name: "AppMain",

    data() {
        return {
            projects: [],
            store,
            currentPage: 1,
            lastPage: null,
        }
    },
    components: {
        AppProject,
    },
    methods: {
        getProjects(selectPage) {

            axios.get(`${this.store.baseUrl}/api/projects`,
                {
                    params: {
                        page: selectPage,
                    }
                }

            )
                .then(response => {
                    console.log(response);
                    this.projects = response.data.results.data;
                    this.currentPage = response.data.results.current_page;
                    this.lastPage = response.data.results.last_page;
                })

        },

    },
    mounted() {
        this.getProjects(1);
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-4" v-for="project in projects">
                <AppProject :project="project"></AppProject>
            </div>
            <div class="container d-flex justify-content-center mt-5">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item"><button class="page-link" @click="getProjects(currentPage - 1)"
                                :class="{ 'disabled': currentPage == 1 }">Previous</button></li>
                        <li class="page-item"><button class="page-link" @click="getProjects(currentPage + 1)"
                                :class="{ 'disabled': currentPage == lastPage }">Next</button></li>
                    </ul>
                </nav>

            </div>

        </div>

    </div>
</template>
