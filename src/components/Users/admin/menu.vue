<template>
    <div>
        <sidebar-menu   @toggle-collapse="onToggleCollapse" :menu="$parent.menu"  :collapsed="true" :rtl="true" >
            <span slot="dropdown-icon"><i class="icofont-rounded-left"></i></span>
            <span slot="toggle-icon" class=""><i class="icofont-eye-blocked"></i></span>
            <span slot="header">
                <div class=" bg-blue-dark">
                    <div class=" text-white text-center font-size-mini">
                        <strong>TISS|   <span >ENGINE V2.0</span></strong>

                    </div>

                </div>
            </span>
            <span slot="footer" class="text-white text-center font-size-mini " >Powered By Afrang.dev</span>

        </sidebar-menu>

    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
.font-size-mini{
    text-align: center;
    font-size: 8px;
}
.v-sidebar-menu .vsm--toggle-btn{
        background-color: red !important;
    }
</style>