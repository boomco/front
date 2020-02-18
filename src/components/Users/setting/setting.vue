<template>
    <div>
        <div class="container pt-4">

        </div>

    </div>
</template>

<script>
    export default {
        name: "setting",
        data() {
            return {
                list:[]
            }
        },
        methods:{
            loadlist(){
                this.$axios.get('')
            }
        },
        mounted() {
        }



        }
</script>

<style scoped>

</style>