app.component('filter-level',{
    props:{
        levelsd:{
            type: Array
        }
    },
    methods: {
        handleLevelChange(event) {
            const selectedLevel = event.target.value;
            this.$emit('level-changed', selectedLevel);
        }
    },
    template:
    /* html */
    `
    <!-- Dropdowns -->
    <div class="dropdowns  ml-30">
        <select @change="handleLevelChange">
            <option value="0" :key="0">Nivel</option>
            <option v-for="level in levelsd" :value="level.id" :key="level.id">{{ level.name }}</option>
        </select>
    </div>
    `
})