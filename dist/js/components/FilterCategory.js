app.component('filter-category', {
    props: {
        categoriesd: {
            type: Array
        }
    },
    methods: {
        handleCategoryChange(event) {
            const selectedCategory = event.target.value;
            this.$emit('category-changed', selectedCategory);
        }
    },
    template:
        /* html */
        `
    <!-- Dropdowns -->
    <div class="dropdowns  ml-30">
        <select @change="handleCategoryChange">
            <option value="0" :key="0">Categoria</option>
            <option v-for="category in categoriesd" :value="category.id" :key="category.id">{{ category.name }}</option>
        </select>
    </div>
    `
})