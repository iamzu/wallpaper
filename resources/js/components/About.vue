<template>
    <div class="container max-w-none">
        <div class="m-8 sm:flex sm:flex-wrap">
            <template v-for="count in 100">
                <div class="p-1 sm:w-1/2 md:w-1/3 lg:w-1/4 transform hover:scale-100 duration-100 ease-in-out">
                    <img src="http://cdn-ali-img-shstaticbz.shanhutech.cn/bizhi/staticwp/202011/76ad7735dd978e24c1ee5055c5a1dd2a--1023049727.jpg" alt="" class="rounded-md" />
                </div>
            </template>
        </div>
    </div>

</template>

<script>
export default {
    name: "About",
    data(){
        return {
            total:100
        }
    }
}
</script>

<style scoped>


</style>
