<script>

export default {
    data() {
        return {
            starships_list: {}
        }
    },
    created: async function () {
        var response = await fetch("https://swapi.dev/api/starships/");
        const { results } = await response.json();
        this.starships_list = results;
        this.starships_list.sort(function (a, b) {
            a.length = a.length.replace(",","")
            b.length = b.length.replace(",","")
            return parseFloat(a.length) - parseFloat(b.length);
        });;
        console.log(this.starships_list[0]);
    },
}
</script>
<template>
    <div class="accordion" id="accordionExample">
        <div class="accordion-item" v-for="(item, index) in starships_list" key="index">
            <h2 class="accordion-header" :id="'heading-' + index">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    :data-bs-target="'#collapse-' + index" aria-expanded="true" :aria-controls="'collapse-' + index">
                    {{ item.name }}
                </button>
            </h2>
            <div :id="'collapse-' + index" class="accordion-collapse collapse" :aria-labelledby="'heading-' + index"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="row">
                        <div class="col-6">
                            <ul class="list-group">
                                <li class="list-group-item">Model</li>
                                <li class="list-group-item">Class</li>
                                <li class="list-group-item">Manufacturer</li>
                                <li class="list-group-item">Length</li>
                                <li class="list-group-item">Crew</li>
                                <li class="list-group-item">Passenger</li>
                            </ul>
                        </div>
                        <div class="col-6">
                            <ul class="list-group">
                                <li class="list-group-item">{{ item.model }}</li>
                                <li class="list-group-item">{{ item.starship_class }}</li>
                                <li class="list-group-item">{{ item.manufacturer }}</li>
                                <li class="list-group-item">{{ item.length }}</li>
                                <li class="list-group-item">{{ item.crew }}</li>
                                <li class="list-group-item">{{ item.passengers }}</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>