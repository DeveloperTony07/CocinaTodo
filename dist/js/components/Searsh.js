app.component('search-component',{
    data() {
        return {
            name: '',
        }
    },
    emits: ['searchname'],
    methods: {
        searchRecipeByName() {
            this.$emit('searchname', this.name);
        }
    },
    template:
    /* html */
    `
    <!-- Search -->
    <div class="search-bar">
        <input type="text" placeholder="Buscar" v-model="name" @input="searchRecipeByName">
    </div>
    <!-- Search-->
    `
})