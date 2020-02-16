<template>
    <div class="container    pt-5  text-right" dir="rtl">
        <div class="container  wmaster pt-4 p-4">
            <h5>{{ $t('ListPost') }} </h5>
            <hr>


            <div class="mb-4">
                <a @click="mylist" :title="$t('Edit')" class="btn btn-primary  shadow  btn-circle btn-xl btn-ci text-white mr-4" ><span class="icofont-list"></span> </a>
                <a  @click="additem"  :title="$t('Add')"  class="btn btn-success   shadow btn-circle btn-xl  mr-3 text-white " ><span class="icofont-plus"></span> </a>
            </div>
        <template v-if="mode=='edit'">


                <form @submit.prevent="saveform">
                    <h6 v-text="$t('EditPost')+ ' '+ job.name"></h6>

                    <input :placeholder="$t('name')" v-model="job.name" class="form-control">
                    <h6 class="mt-4" v-text="$t('AccessPoint')"></h6>
                    <div class="row">
                        <div  v-for="item in listjob" class="col-sm-2" :key="item.id" >
                            <switches :label="$t(item.name)"   color="red"  v-model="checklist[item.id]"></switches>
                        </div>
                    </div>
                    <input type="submit"  class="btn mb-4 btn-success align-self-center mt-4" :value="$t('save')">
                </form>

        </template>
        <template v-if="mode=='list'">
                <table class="table  table-striped">
                    <caption>{{ $t('ListPost') }}</caption>

                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col" v-text="$t('name')"></th>
                        <th  class="text-center" scope="col" v-text="$t('action')"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item,index) in listrole"  :key="index">
                        <th scope="row" v-text="index+1"></th>
                        <td v-text="item.name"></td>
                        <td class="text-center" >
                            <button  @click="edit(index)" class="btn btn-success icofont-ui-edit"></button>
                            <button  @click="del(item.id)" class="btn btn-danger mr-2 icofont-ui-delete"></button>
                        </td>
                    </tr>

                    </tbody>
                </table>

        </template>
        </div>
    </div>
</template>

<script>
    import Switches from 'vue-switches';

    export default {
        components: {
            Switches
        },
            name: "post",
        data(){
            return {
                list:[],
                mode:'list',
                enabled:null,
                listjob:[],
                checklist:{},
                editedlist:{},
                job:{
                    id:null,
                    name:'',

                },
                listrole:{}

            }

        },
        computed: {
            sendchecklist:function () {
                let item;
                let myobject=[];
                for(item in this.checklist){
                    if(this.checklist[item]===true){
                        myobject.push(item);
                    };
                }
                return myobject;

            },

            sendchecklistedit:function () {
                let item;
                let myobject=[];
                let that=this;
                this.listrole.forEach(function(element){
                    that.checklist[element.id]=true;

                });


                return myobject;

            }

        },
        methods:{
            edit(id){

                let edit=this.listrole[id];
                this.job.id=edit.id;
                this.job.name=edit.name;
                this.mode='edit';
                this.listrole=edit.to_job;
                this.sendchecklist=this.sendchecklistedit;
            },
            additem(){
                this.resetform();
            },
            del(id){
                let that=this;
                this.$swal.fire({
                    title: that.$t('Areyousure'),
                    text: that.$t('Youwontbeabletorevertthis'),
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    cancelButtonText: that.$t('cancel'),
                    confirmButtonText: that.$t('Yesdeleteit')
                }).then((result) => {
                    if (result.value) {
                        that.$axios.delete(that.$url+'user/Roles/'+id,
                            {
                                headers:{
                                    Authorization:localStorage.token
                                }
                            }
                        ).then(function (response) {

                            that.mode='edit';
                            that.mylist();
                            that.$swal.fire({
                                title: that.$t('Deleted'),
                                text: that.$t('Yourrecordhasbeendeleted'),
                                icon: 'success',
                                 showCancelButton: false,
                                  confirmButtonText: that.$t('ok')

                            }
                            )
                        });


                    }
                })

            },
            resetform(){
                this.job={
                    id:null,
                    name:'',
                }
                this.checklist={};
                this.mode='edit';
            },
            saveform(){
                let that=this;
                let data={
                    job:this.job,
                    list:this.sendchecklist

                }
                if(this.job.id==null){
                    this.$axios.post(this.$url+'user/Roles',data,
                    {
                      headers:{
                          Authorization:localStorage.token
                      }
                    }
                    ).then(function (response) {

                        that.mode='edit';
                        that.mylist();
                        });
                }
                if(this.job.id!=null){
                    this.$axios.put(this.$url+'user/Roles/'+this.job.id,data,
                        {
                            headers:{
                                Authorization:localStorage.token
                            }
                        }
                    ).then(function (response) {

                        that.mode='edit';
                        that.mylist();
                    });
                }



            },
            listjobfunction(){
                let that=this;
                this.$axios.get(this.$url+'user/Joblist',{headers:{Authorization:localStorage.token}})
                    .then(function (response) {
                        that.listjob = response.data;

                    });
            },
            mylist(){
                let that=this;
                this.$axios.get(this.$url+'user/Roles',{headers:{Authorization:localStorage.token}})
                    .then(function (response) {
                        that.listrole = response.data;
                        that.mode='list';

                    });

            }
        },
        watch: {

        },
        mounted() {
            this.listjobfunction();
            this.mylist();
        }

    }
</script>

<style scoped>
    .wmaster{
        padding: 25px;
        margin-top: 8px;
        background-color: #ffff;
        -webkit-box-shadow: -4px 6px 5px -4px rgba(176,173,176,1);
        -moz-box-shadow: -4px 6px 5px -4px rgba(176,173,176,1);
        box-shadow: -4px 6px 5px -4px rgba(176,173,176,1);
        border-radius: 15px;
        overflow: hidden;

    }
    .btn-circle.btn-xl {
        width: 50px;
        height: 50px;
        padding: 10px 10px;
        border-radius: 35px;
        font-size: 24px;
        line-height: 1.33;
    }

    .btn-circle {
        width: 30px;
        height: 30px;
        padding: 6px 0px;
        border-radius: 15px;
        text-align: center;
        font-size: 12px;
        line-height: 1.42857;
    }

</style>