<template>
    <div class="container-xl">
        <Navigation></Navigation>

        <main class="flex">
            <router-view></router-view>
        </main>
        <Bottom></Bottom>
    </div>
</template>

<script>
import Navigation from './common/Navigation';
import Bottom from './common/Bottom';

export default {
    components: {
        Navigation,
        Bottom
    },
    name: "Layout"
}
</script>

<style scoped>

</style>
