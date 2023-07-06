app.component('filters-component', {
    props: {
        total: {
            type: Number
        },
        occasionsd: {
            type: Array
        },
        levelsd: {
            type: Array
        },
        categoriesd: {
            type: Array
        },
    },
    data() {
        return {
            name: '',
            /*
            categoryId: 0
            */
        }
    },
    emits: ['searchname'],
    methods: {
        searchRecipeByName() {
            this.$emit('searchname', this.name);
        },
        /*
        filterRecipeByCategory() {
            this.$emit('searchByCategory', this.categoryId);
        }
        */
    },
    /*
    mounted() {
        //console.log(this.levelsd);
    },*/
    template:
        /*html*/
        `<!-- Search -->
    <div class="m-basic-2 container-row">
            <h2 class="txt-filters">Buscar <span>Recetas</span></h2>
            <h2 class="txt-filters ml-filters">Elegir <span>Recetas por</span></h2>
        </div>
        <section class="container-search">
            
            <div class="search-bar">
                <input type="text" placeholder="Buscar" v-model="name" @input="searchRecipeByName">
            </div>
            <!-- Search-->
            <!-- Dropdowns -->
            <div class="dropdowns  ml-30">
                <select name="categories" id="category">
                <option value="0" :key="0">Categoria</option>
                <option v-for="category in categoriesd" :value="category.id" :key="category.id">{{ category.name }}</option>
                </select>
            </div>
            <div class="dropdowns  ml-30">
                <select name="occasion" id="occasion">
                    <option value="0" :key="0">Ocasion</option>
                    <option v-for="occasion in occasionsd" :value="occasion.id" :key="occasion.id">{{ occasion.name }}</option>
                </select>
            </div>
            <div class="dropdowns ml-30">
                <select name="level" id="level">
                    <option value="0" :key="0">Nivel</option>
                    <option v-for="level in levelsd" :value="level.id" :key="level.id">{{ level.name }}</option>
                </select>
            </div>
        </section>
        <div class="m-basic">
            <h2 class="txt-filters m-negative-1">{{total}}<span> Resultados</span></h2>
        </div>
    `
})