<script>
import axios from 'axios';
export default {
    name: "AppMain",

    data() {
        return {
            projects: [],
            baseUrl: 'http://localhost:8000',
            currentPage: 1,
            lastPage: null,
        }
    },
    methods: {
        getProjects(selectPage) {

            axios.get(`${this.baseUrl}/api/projects`,
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
        troncateText(text) {
            if (text && text.length > 10) {
                return text.substr(0, 50) + `...`
            }
        }
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
                <div class="card mb-2" style="width: 18rem;">
                    <img v-if="project.preview_image" :src="`${this.baseUrl}/storage/${project.preview_image}`"
                        class="card-img-top" />
                    <img v-else src="http://www.tecno-store.it/wp-content/uploads/immagine-non-disponibile.png"
                        class="card-img-top">
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
