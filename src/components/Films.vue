<script>

export default {
    data() {
        return {
            films_list: {}
        }
    },
    created: async function () {
        var response = await fetch("https://swapi.dev/api/films/");
        const { results } = await response.json();
        this.films_list = results
        this.films_list.sort(function (a, b) {
            return b.release_date.localeCompare(a.release_date);
        });
        console.log(this.films_list[0])
    },
}
</script>

<template>
    <div class="accordion" id="accordionExample">
        <div class="accordion-item" v-for="(item, index) in films_list" key="index">
            <h2 class="accordion-header" :id="'heading-' + index">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    :data-bs-target="'#collapse-' + index" aria-expanded="true" :aria-controls="'collapse-' + index">
                    {{ item.title }}
                </button>
            </h2>
            <div :id="'collapse-' + index" class="accordion-collapse collapse" :aria-labelledby="'heading-' + index"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="row">
                        <div class="col-6">
                            <ul class="list-group">
                                <li class="list-group-item">Release Date</li>
                                <li class="list-group-item">Director</li>
                                <li class="list-group-item">Producer</li>
                            </ul>
                        </div>
                        <div class="col-6">
                            <ul class="list-group">
                                <li class="list-group-item">{{ item.release_date }}</li>
                                <li class="list-group-item">{{ item.director }}</li>
                                <li class="list-group-item">{{ item.producer }}</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

