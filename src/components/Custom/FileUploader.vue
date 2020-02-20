<template>
    <div>
        <vue-dropzone  @vdropzone-complete="showitem"  ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
        <img v-if="file!=null" class="img-thumbnail w-100" :src="$storage+'media/'+this.mode+'/'+this.id+'/'+this.file" >
        <span @click="deleteitem" v-if="file!=null" class="icofont-ui-delete tiss-cursur"></span>
    </div>

</template>

<script>
    import vue2Dropzone from 'vue2-dropzone'
    import 'vue2-dropzone/dist/vue2Dropzone.min.css'

    export default {
        name: "FileUploader",
        components: {
            vueDropzone: vue2Dropzone
        },
        props:{
            mode:{
                type:String,
                default: 'Public'
            },
            id:{
                type:Number,
                default: 1
            },
            name:{
                type:String,
                default:'thump'
            },
            file:{
                type:String,
                default:null
            }
        },
        computed:{

        },
        data() {
            return {
                dropzoneOptions: {
                    scrollable:true,
                    width:'100%',
                    minWidth:'100%',
                    height:'100%',
                    minHeight:'100%',
                    resizable:true,
                    url: this.$url+'user/fileupload',
                    maxFilesize: 20.0,
                    params:{
                        mode:this.mode,
                        id:this.id,
                        name:this.name,
                        random:this.random
                    },
                    dictDefaultMessage:this.$t('uploadyourfile'),
                    headers: {
                        Authorization: localStorage.token
                    }
                },
            }
            },
        methods: {
            showitem(file) {
                this.$refs.myVueDropzone.removeFile(file);
                console.log(file.xhr.responseText);
                this.file = file.xhr.response;

            },
            deleteitem() {
                this.$axios.delete(this.$url + 'user/fileupload/' + this.file,
                    {
                     data:{
                         mode:this.mode,
                         id:this.id,
                         file:this.file,
                     },

                    headers: {
                        Authorization: localStorage.token
                    }

                })
                    .then(function (response) {

                    });

            }
        }

    }
</script>

<style scoped>

</style>