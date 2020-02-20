<template>
    <div>
      <div class="container pt-5 text-right" dir="rtl">
          <h4 v-text="$t('contactus')"></h4>
          <hr>
            <select>
                <option v-for="(item,index) in list" :key="index" :value="item.lang" v-text="item.lang"></option>
            </select>
          <form class="form row" dir="ltr" @submit.prevent="save">
              <div class="col-sm-12 col-xs-12">
                  <label  v-text="$t('address')" ></label>
                      <textarea dir="rtl" type="text" v-model="contacus.address" class="form-control"  ></textarea>


              </div>
              <div class="col-sm-6 col-xs-12">
                  <label class="sr-only" v-text="$t('phone')" ></label>
                  <div class="input-group mb-2">
                      <div class="input-group-prepend">
                          <div class="input-group-text">
                              <span class="icofont icofont-phone"></span> | {{ $t('phone')    }}
                          </div>
                      </div>
                      <input type="text" v-model="contacus.phone" class="form-control"  placeholder="+98">
                  </div>
              </div>
              <div class="col-sm-6 col-xs-12">
                  <label class="sr-only" v-text="$t('fax')" ></label>
                  <div class="input-group mb-2">
                      <div class="input-group-prepend">
                          <div class="input-group-text">
                              <span class="icofont icofont-fax"></span> | {{ $t('fax')    }}
                          </div>
                      </div>
                      <input type="text" v-model="contacus.facbook" class="form-control"  placeholder="+98">
                  </div>
              </div>
              <div class="col-sm-6 col-xs-12">
                  <label class="sr-only" v-text="$t('supportphone')" ></label>
                  <div class="input-group mb-2">
                      <div class="input-group-prepend">
                          <div class="input-group-text">
                              <span class="icofont icofont-support"></span> | {{ $t('supportphone')    }}
                          </div>
                      </div>
                      <input type="text" v-model="contacus.supportphone" class="form-control"  placeholder="+98">
                  </div>
              </div>
              <div class="col-sm-12 col-xs-12">
                  <label class="sr-only" v-text="$t('otherphone')" ></label>
                  <div class="input-group mb-2">
                      <div class="input-group-prepend">
                          <div class="input-group-text">
                              <span class="icofont icofont-phone"></span> | {{ $t('otherphone')    }}
                          </div>
                      </div>
                      <input type="text" v-model="contacus.otherphone" class="form-control"  placeholder="+98">
                  </div>
              </div>
              <div class="col-sm-6 col-xs-12">
                  <label class="sr-only" >Facebook</label>
                  <div class="input-group mb-2">
                      <div class="input-group-prepend">
                          <div class="input-group-text">
                              <span class="icofont icofont-facebook"></span> | Facebook
                          </div>
                      </div>
                      <input type="text" v-model="contacus.facbook" class="form-control"  placeholder="URL">
                  </div>
              </div>
              <div class="col-sm-6 col-xs-12">
                  <label class="sr-only" >Open Street Map</label>
                  <div class="input-group mb-2">
                      <div class="input-group-prepend">
                          <div class="input-group-text">
                              <span class="icofont icofont-street-view"></span> | Open Street Map
                          </div>
                      </div>
                      <input type="text" v-model="contacus.googlemap" class="form-control"  placeholder="URL">
                  </div>
              </div>
              <div class="col-sm-6 col-xs-12">
                  <label class="sr-only" >instagram</label>
                  <div class="input-group mb-2">
                      <div class="input-group-prepend">
                          <div class="input-group-text">
                              <span class="icofont icofont-instagram"></span> | instagram
                          </div>
                      </div>
                      <input type="text" v-model="contacus.instagram" class="form-control"  placeholder="URL">
                  </div>
              </div>
              <div class="col-sm-6 col-xs-12">
                  <label class="sr-only" >telegram</label>
                  <div class="input-group mb-2">
                      <div class="input-group-prepend">
                          <div class="input-group-text">
                              <span class="icofont icofont-telegram"></span> | telegram
                          </div>
                      </div>
                      <input type="text" v-model="contacus.telegram" class="form-control"  placeholder="@">
                  </div>
              </div>
              <div class="col-sm-6 col-xs-12">
                  <label class="sr-only" >telegram</label>
                  <div class="input-group mb-2">
                      <div class="input-group-prepend">
                          <div class="input-group-text">
                              <span class="icofont icofont-telegram"></span> | telegram chanel
                          </div>
                      </div>
                      <input type="text"  v-model="contacus.telegramchanal" class="form-control"  placeholder="@">
                  </div>
              </div>

              <div class="col-sm-6 col-xs-12">
                  <label class="sr-only" >whatsapp</label>
                  <div class="input-group mb-2">
                      <div class="input-group-prepend">
                          <div class="input-group-text">
                              <span class="icofont icofont-whatsapp"></span> | whatsapp
                          </div>
                      </div>
                      <input type="text"  v-model="contacus.whatsapp" class="form-control"  placeholder="+98XXXXXXX">
                  </div>
              </div>
              <div class="col-sm-6 col-xs-12">
                  <label class="sr-only" >youtube</label>
                  <div class="input-group mb-2">
                      <div class="input-group-prepend">
                          <div class="input-group-text">
                              <span class="icofont icofont-youtube"></span> | youtube
                          </div>
                      </div>
                      <input type="text"  v-model="contacus.youtube" class="form-control"  placeholder="URL">
                  </div>
              </div>
              <div class="col-sm-6 col-xs-12">
                  <label class="sr-only" >aparat</label>
                  <div class="input-group mb-2">
                      <div class="input-group-prepend">
                          <div class="input-group-text">
                              <span class="icofont icofont-youtube-play"></span> | aparat
                          </div>
                      </div>
                      <input type="text"  v-model="contacus.aparat" class="form-control"  placeholder="URL">
                  </div>
              </div>
              <div class="col-sm-6 col-xs-12">
                  <label class="sr-only" >soundcloud</label>
                  <div class="input-group mb-2">
                      <div class="input-group-prepend">
                          <div class="input-group-text">
                              <span class="icofont icofont-soundcloud"></span> | soundcloud
                          </div>
                      </div>
                      <input type="text"  v-model="contacus.soundcloud" class="form-control"  placeholder="URL">
                  </div>
              </div>
              <div class="col-sm-6 col-xs-12">
                  <label class="sr-only" >twitter</label>
                  <div class="input-group mb-2">
                      <div class="input-group-prepend">
                          <div class="input-group-text">
                              <span class="icofont icofont-twitter"></span> | twitter
                          </div>
                      </div>
                      <input type="text"  v-model="contacus.twitter" class="form-control"  placeholder="URL">
                  </div>
              </div>
              <div class="col-sm-6 col-xs-12">
                  <label class="sr-only" >Pinterest</label>
                  <div class="input-group mb-2">
                      <div class="input-group-prepend">
                          <div class="input-group-text">
                              <span class="icofont icofont-pinterest"></span> | Pinterest
                          </div>
                      </div>
                      <input type="text"  v-model="contacus.pinterest" class="form-control"  placeholder="URL">
                  </div>
              </div>
              <div class="col-sm-6 col-xs-12">
                  <label class="sr-only" >Google Plus</label>
                  <div class="input-group mb-2">
                      <div class="input-group-prepend">
                          <div class="input-group-text">
                              <span class="icofont icofont-google-plus"></span> | G+
                          </div>
                      </div>
                      <input type="text"  v-model="contacus.googleplus" class="form-control"  placeholder="URL">
                  </div>
              </div>
              <div class="col-sm-6 col-xs-12">
                  <label class="sr-only" >Linked In</label>
                  <div class="input-group mb-2">
                      <div class="input-group-prepend">
                          <div class="input-group-text">
                              <span class="icofont icofont-linkedin"></span> | linkedin
                          </div>
                      </div>
                      <input type="text"  v-model="contacus.linkedin" class="form-control"  placeholder="URL">
                  </div>
              </div>
              <div class="col-sm-6 col-xs-12">
                  <label class="sr-only" >QQ</label>
                  <div class="input-group mb-2">
                      <div class="input-group-prepend">
                          <div class="input-group-text">
                              <span class="icofont icofont-qq"></span> | QQ
                          </div>
                      </div>
                      <input type="text"  v-model="contacus.qq" class="form-control"  placeholder="URL">
                  </div>
              </div>
              <div class="col-sm-6 col-xs-12">
                  <label class="sr-only" >tumblr</label>
                  <div class="input-group mb-2">
                      <div class="input-group-prepend">
                          <div class="input-group-text">
                              <span class="icofont icofont-tumblr"></span> | tumblr
                          </div>
                      </div>
                      <input type="text"  v-model="contacus.tumblr" class="form-control"  placeholder="URL">
                  </div>
              </div>
              <div class="col-sm-6 col-xs-12">
                  <label class="sr-only" >baidu</label>
                  <div class="input-group mb-2">
                      <div class="input-group-prepend">
                          <div class="input-group-text">
                              <span class="icofont icofont-baidu-tieba"></span> | baidu
                          </div>
                      </div>
                      <input type="text"  v-model="contacus.baidu" class="form-control"  placeholder="URL">
                  </div>
              </div>
              <div class="col-sm-6 col-xs-12">
                  <label class="sr-only" >skype</label>
                  <div class="input-group mb-2">
                      <div class="input-group-prepend">
                          <div class="input-group-text">
                              <span class="icofont icofont-skype"></span> | skype
                          </div>
                      </div>
                      <input type="text"  v-model="contacus.skype" class="form-control"  placeholder="+98">
                  </div>
              </div>
              <div class="col-sm-6 col-xs-12">
                  <label class="sr-only" >viber</label>
                  <div class="input-group mb-2">
                      <div class="input-group-prepend">
                          <div class="input-group-text">
                              <span class="icofont icofont-viber"></span> | viber
                          </div>
                      </div>
                      <input type="text"  v-model="contacus.viber" class="form-control"  placeholder="+98">
                  </div>
              </div>
              <div class="col-sm-6 col-xs-12">
                  <label class="sr-only" >line</label>
                  <div class="input-group mb-2">
                      <div class="input-group-prepend">
                          <div class="input-group-text">
                              <span class="icofont icofont-line"></span> | line
                          </div>
                      </div>
                      <input type="text"  v-model="contacus.line" class="form-control"  placeholder="+98">
                  </div>
              </div>
              <div class="col-sm-6 col-xs-12">
                  <label class="sr-only" >sina weibo</label>
                  <div class="input-group mb-2">
                      <div class="input-group-prepend">
                          <div class="input-group-text">
                              <span class="icofont icofont-weibo"></span> | sina weibo
                          </div>
                      </div>
                      <input type="text"  v-model="contacus.sinaweibo" class="form-control"  placeholder="URL">
                  </div>
              </div>
              <div class="col-sm-6 col-xs-12">
                  <label class="sr-only" >vk</label>
                  <div class="input-group mb-2">
                      <div class="input-group-prepend">
                          <div class="input-group-text">
                              <span class="icofont icofont-vk"></span> | vk
                          </div>
                      </div>
                      <input type="text"  v-model="contacus.vk" class="form-control"  placeholder="URL">
                  </div>
              </div>
              <div class="col-sm-6 col-xs-12">
                  <label class="sr-only" >reddit</label>
                  <div class="input-group mb-2">
                      <div class="input-group-prepend">
                          <div class="input-group-text">
                              <span class="icofont icofont-reddit"></span> | reddit
                          </div>
                      </div>
                      <input type="text"  v-model="contacus.reddit" class="form-control"  placeholder="URL">
                  </div>
              </div>
              <div class="col-sm-6 col-xs-12">
                  <label class="sr-only" >tiktok</label>
                  <div class="input-group mb-2">
                      <div class="input-group-prepend">
                          <div class="input-group-text">
                              <span class="icofont icofont-imac"></span> | tiktok
                          </div>
                      </div>
                      <input type="text"  v-model="contacus.tiktok" class="form-control"  placeholder="URL">
                  </div>
              </div>
              <hr>
              <div class="col-sm-12">
                  <input type="submit" class="btn btn-dark clearfix" :value="$t('save')">

              </div>
          </form>

      </div>
    </div>
</template>

<script>
    export default {
        name: "contactus",
        data() {
            return {
                lang:[],
                list:[],
                langdefault:'fa',
               
            }
        },
        computed: {
            contacus:function() {
                    let that=this
                let backdata;
                 this.list.map(function(item) {
                    if(that.langdefault==item.lang){

                        backdata=item;

                    }
                });
                 return backdata;
            }
        },
        methods: {
            save(){
              let that=this;
              this.$axios.put(this.$url+'user/ContactusController/'+this.contacus.id,this.contacus,
                  {

                      headers:{
                          Authorization:localStorage.token
                      }
                  })
                  .then(function (response) {
                      that.$swal.fire(that.$t('Saved'));

                  });
            },
            loadsetting(){
                let that=this;
                this.$axios.get(this.$url+'user/ContactusController',{

                    headers:{Authorization:localStorage.token}
                })   .then(function (response) {

                    that.list=response.data;


                });
            }
        },
        mounted() {
            //this.show();
            this.loadsetting();


        }

    }
</script>

<style scoped>
</style>