<template>
    <div>

        <modal height="auto" class="modal-dialog" role="document" name="code">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
                        <span class="icofont-code text-danger"></span><strong>CODE</strong>
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <template v-if="code!=null">
                    <div v-html="code"></div>
                    </template>
                    <textarea v-model="code" class="form-control"></textarea>

                </div>
                <div class="modal-footer">
                    <button @click="addcode"  type="button" class="btn btn-primary">{{ $t('addtotext')}}</button>
                    <button  @click="codehide" type="button" class="btn btn-secondary" data-dismiss="modal">{{ $t('close') }}</button>
                </div>
            </div>
        </modal>
        <modal         height="auto" class="modal-dialog" role="document" name="aparat">

                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            <span class="icofont-movie text-danger"></span><strong>APARAT</strong>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <template v-if="aparat!=null">
                            <div class="h_iframe-aparat_embed_frame"><span style="display: block;padding-top: 57%"></span><iframe :src="'https://www.aparat.com/video/video/embed/videohash/'+aparat+'/vt/frame'" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe></div>

                        </template>
                            <input v-model="aparat" class="form-control">

                    </div>
                    <div class="modal-footer">
                        <button @click="addaparat"  type="button" class="btn btn-primary">{{ $t('addtotext')}}</button>
                        <button  @click="aparathide" type="button" class="btn btn-secondary" data-dismiss="modal">{{ $t('close') }}</button>
                    </div>
                </div>


        </modal>
        <modal name="uploader"
               :width="'100%'"
               height="auto"
               :transition="'fade'"
               :top="0"
               scrollable="true"
        >
            <span @click="hide" class="badge badge-dark"><span class="icofont icofont-close icofont-3x"></span></span>
            <vue-dropzone  @vdropzone-complete="showitem"  ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
            <div class="container">
                <div class="row">
                    <template v-for="(item,index) in files" >
                        <div class="col-sm-2 img-thumbnail"  :key="index" v-if="item.mode=='pic'">
                            <div class="imginsert">
                                <a class="badge badge-dark text-white">{{ item.ext }}</a>

                                <img @click="insertimage('%url%'+'filemanager/'+item.file)" :src="$storage+'filemanager/'+item.file" class="w-100  h-100">
                            </div>
                            <div>

                                <a @click="detitem(item.file)" class=" badge badge-danger text-white m-1" style="position: absolute; bottom: 0px; left: 20%;" ><span class="icofont-ui-delete"></span></a>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
            <hr>
            <div class="row">

                <template  v-for="(item,index) in files"  >

                    <template v-if="item.mode!='pic'">
                        <div class="col-sm-2 col-xs-12   text-center pt-5" :key="index">
                            <template v-if="item.mode=='archive'">
                                <div class="">
                                    <div @click="inserarchive('%url%'+'filemanager/'+item.file)" class="icofont-archive icofont-3x" ></div>

                                </div>
                            </template>
                            <template v-if="item.mode=='pdf'">
                                <div class="">
                                    <span   @click="inseerpdf('%url%'+'filemanager/'+item.file)" class="icofont-file-pdf icofont-3x" ></span>
                                </div>
                            </template>
                            <template v-if="item.mode=='doc'">
                                <div class="">
                                    <span @click="insertdoc('%url%'+'filemanager/'+item.file)" class="icofont-file-word icofont-3x" ></span>
                                </div>
                            </template>
                            <template v-if="item.mode=='powerpoint'">
                                <div class="">
                                    <span @click="insertslide('%url%'+'filemanager/'+item.file)" class="icofont-file-powerpoint icofont-3x" ></span>
                                </div>
                            </template>
                            <template v-if="item.mode=='otherfile'">
                                <span   @click="insertotherfile('%url%'+'filemanager/'+item.file)" class="icofont-ui-file  icofont-3x" ></span>
                            </template>
                            <template v-if="item.mode=='excel'">
                                <span @click="insertexcel('%url%'+'filemanager/'+item.file)" class="icofont-file-excel  icofont-3x" ></span>
                            </template>
                            <h6 class="mt-4">

                                <a class="btn">{{ item.ext }}</a>
                                <div>
                                    <a target="_blank" class="badge badge-dark " :href="$storage+'filemanager/'+item.file"><span class="icofont-download"></span></a>
                                    <a  @click="detitem(item.file)" class=" badge badge-danger  mr-1" ><span class="icofont-ui-delete"></span></a>
                                </div>

                            </h6>

                        </div>

                    </template>

                </template>
            </div>
        </modal>

        <template v-if="showeditors==false">
            <div v-html="text"></div>

        </template>
        <template v-if="showeditors==true">

        </template>
        <froala id="edit" :tag="'textarea'"   :config="config" v-model="text"></froala>

        <button @click="apartshow" class="btn btn-sm btn-dark m-1">{{ $t('Aparat')}} | <span class="icofont-ui-movie"></span>  </button>
        <button @click="codeshow"  class="btn  btn-sm btn-dark m-1">{{ $t('embedcode')}} | <span class="icofont-code"></span> </button>
        <button @click="show" class="btn btn-dark btn-sm m-1">{{ $t('filemanager')}} | <span class="icofont-folder-open"></span> </button>
        <hr>
    </div>

</template>

<script>
    import vue2Dropzone from 'vue2-dropzone'
    import 'vue2-dropzone/dist/vue2Dropzone.min.css'

    export default {
        components: {
            vueDropzone: vue2Dropzone
        },

        computed: {

                // a computed getter
                files: function () {
                    let item;
                    let myobject=[];
                    for(item in this.listfile){
                          let model='otherfile';
                        let mode=this.listfile[item].substr(this.listfile[item].lastIndexOf('.') + 1).toUpperCase();
                        if( mode=='JPG' || mode=='BMP' || mode=='PNG' || mode=='JPEG' || mode=='TIFF'){
                            model='pic';
                        }
                        if( mode=='PDF' ){
                            model='pdf';
                        }
                        if( mode=='DOCX' || mode=='DOC' || mode=='ODT' || mode=='RTF' || mode=='TEXT' || mode=='TXT'  ){
                            model='doc';
                        }
                        if( mode=='ZIP' || mode=='RAR' || mode=='7ZIP' || mode=='ISO'  ){
                            model='archive';
                        }
                        if( mode=='PPTX' || mode=='PPT' || mode=='ODP' || mode=='PPS' || mode=='PPSX'  ){
                            model='powerpoint';
                        }
                        if( mode=='XLSX' || mode=='XLS' || mode=='CSV' || mode=='ODS' || mode=='XLSB'  ){
                            model='excel';
                        }
                        if( mode=='PUB'  ){
                            model='publisher';
                        }
                        myobject.push({
                            file:this.listfile[item],
                            ext:mode,
                            mode:model
                        });

                    }
                        console.log(myobject);
                    return myobject;
                }

        },
        name: "Tisseditor",
        props:{
            height: {
                type: Number,
                default: 200
            },
            text:{
                type:String,
                default:''

            },
            backdata:{
                type:String,
                default:'text'

            },
            mode:{
                type:String,
                default: 'Public'
            },
            id:{
                type:Number,
                default: 1
            }

        },
        watch: {
            text:function (val) {
                this.$emit('myevent', val);
            }
        },
            data() {
            return {
                aparat:null,
                code:null,
                listfile:{},
                showeditors:true,
                dropzoneOptions: {
                    scrollable:true,
                    width:'100%',
                    minWidth:'100%',
                    height:'100%',
                    minHeight:'100%',
                    resizable:true,
                    url: this.$url+'user/Filemanager',
                    maxFilesize: 20.0,
                    params:{
                        mode:this.mode,
                        id:this.id
                    },
                    dictDefaultMessage:this.$t('uploadyourfile'),
                    headers: {
                            Authorization: localStorage.token
                    }
                },
                config: {

                    placeholderText: this.$t('Plesetypeyourtext'),
                    charCounterCount: false,
                    direction: 'rtl',
                    heightMin: this.height,


                    events: {
                        'initialized': function(initControls) {



                        }
                    }
                },
            }
        },
        methods: {



            initialize: function(initControls) {
                this.initControls = initControls;

            },
            converttoUrladdress() {
                this.text = this.text.replace("%url%", this.$storage);

            },
            removeAllFiles() {
                this.$refs.dropzone.removeAllFiles();
            },
            show () {
                this.$modal.show('uploader');
            },
            hide () {
                this.$modal.hide('uploader');
            },
            apartshow(){

                this.$modal.show('aparat');

            },
            aparathide(){
                this.$modal.hide('aparat');

            },
            codeshow(){
                this.$modal.show('code');

            },
            codehide(){
                this.$modal.hide('code');

            },
            addcode(){
                this.text=this.text+this.code;
                this.code=null;
                this.codehide();


            },
            insertimage(item){
             this.text=this.text+'<img  width="100%" src='+item+'>';
             this.converttoUrladdress();
             this.hide();
            },
            inserarchive(item){
                this.text=this.text+'<a href='+item+'><img  width="50px" src="'+this.$storage+'asset/icon/zip.png"></a>';
                this.converttoUrladdress();
                this.hide();
            },
            insertslide(item){
                this.text=this.text+'<a href='+item+'><img  width="50px" src="'+this.$storage+'asset/icon/powerpoint.png"></a>';
                this.converttoUrladdress();
                this.hide();
            },
            insertexcel(item){
                this.text=this.text+'<a href='+item+'><img  width="50px" src="'+this.$storage+'asset/icon/excel.png"></a>';
                this.converttoUrladdress();
                this.hide();
            },
            insertdoc(item){
                this.text=this.text+'<a href='+item+'><img  width="50px" src="'+this.$storage+'asset/icon/word.png"></a>';
                this.converttoUrladdress();
                this.hide();
            },
            addaparat(){

                this.text=this.text+'<div class="h_iframe-aparat_embed_frame" style="height: 700px"><span style="display: block;padding-top: 57%"></span><iframe src="https://www.aparat.com/video/video/embed/videohash/'+this.aparat+'/vt/frame" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe></div>';
                this.aparathide();
            },
            insertotherfile(item){
                this.text=this.text+'<a href='+item+'><img  width="50px" src="'+this.$storage+'asset/icon/other.png"></a>';
                this.converttoUrladdress();
                this.hide();

            },
            inseerpdf(item){
                this.text=this.text+'<a href='+item+'><img  width="50px" src="'+this.$storage+'asset/icon/pdf.png"></a>';
                this.converttoUrladdress();
                this.hide();
            },
            detitem(item){
                let that=this;
                this.$axios.delete(this.$url+'user/Filemanager/1',
                    {
                        params: {
                            file: item
                        },
                        headers: {Authorization: localStorage.token}
                    }).then(function (res) {
                    that.showitem();

                })

            },
            showitem(){
                let that=this;
                this.$axios.get(this.$url+'user/Filemanager',{
                    params: {
                        id: this.id,
                        mode:this.mode

                    },
                    headers:{Authorization:localStorage.token}
                })
                    .then(function (response) {

                    that.listfile=response.data;
                });

                }
            },
            mounted() {
                //this.show();
                this.showitem();


        }


    }
</script>

<style scoped>
.v--modal{
    width: 100%;
    overflow: scroll !important;
}
</style>