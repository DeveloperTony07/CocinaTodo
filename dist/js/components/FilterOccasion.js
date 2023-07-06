app.component('filter-occasion',{
    props:{
        occasionsd:{
            type: Array
        }
    },
    methods: {
        handleOccasionChange(event) {
            const selectedOccasion = event.target.value;
            this.$emit('occasion-changed', selectedOccasion);
        }
    },
    template:
    /* html */
    `
    <!-- Dropdowns -->
    <div class="dropdowns  ml-30">
        <select @change="handleOccasionChange">
            <option value="0" :key="0">Ocasion</option>
            <option v-for="occasion in occasionsd" :value="occasion.id" :key="occasion.id">{{ occasion.name }}</option>
        </select>
    </div>
    `
})