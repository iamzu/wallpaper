<template>
    <h1>Category:{{ name }}</h1>
</template>

<script>
export default {
    name: "Category",
    data() {
        return {
            name: ''
        }
    },
    mounted() {

    },
    watch: {
        '$route': 'updateCategoryName'
    },
    methods: {
        updateCategoryName() {
            console.log(this.$route)
            this.name = this.$route.params.name.toUpperCase()
        }
    }

}
</script>

<style scoped>

</style>
