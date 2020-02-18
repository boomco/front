<template>
    <div>
      <div class="container pt-5 text-right" dir="rtl">
          <h4 v-text="$t('contactus')"></h4>
          <hr>
          <form class="form" dir="ltr">

              <div class="col-auto">
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
              <div class="col-auto">
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
              <div class="col-auto">
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
              <div class="col-auto">
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

              <div class="col-auto">
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
              <div class="col-auto">
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
              <div class="col-auto">
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
              <div class="col-auto">
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
              <div class="col-auto">
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
              <div class="col-auto">
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
              <div class="col-auto">
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
              <div class="col-auto">
                  <label class="sr-only" >Linked In</label>
                  <div class="input-group mb-2">
                      <div class="input-group-prepend">
                          <div class="input-group-text">
                              <span class="icofont icofont-linkedin"></span> | linkedin
                          </div>
                      </div>
                      <input type="text"  v-model="contacus.googleplus" class="form-control"  placeholder="URL">
                  </div>
              </div>
              <div class="col-auto">
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
              <div class="col-auto">
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
              <div class="col-auto">
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
              <div class="col-auto">
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
              <div class="col-auto">
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
              <div class="col-auto">
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
              <div class="col-auto">
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
              <div class="col-auto">
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
              <div class="col-auto">
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
              <div class="col-auto">
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
                contacus:{
                    facbook:null,
                    instagram:null,
                    telegram:null,
                    telegramchanal:null,
                    whatsapp:null,
                    youtube:null,
                    aparat:null,
                    soundcloud:null,
                    twitter:null,
                    pinterest:null,
                    googleplus:null,
                    linkedin:null,
                    phone:null,
                    fax:null,
                    phones:null,
                    googlemap:null,
                    address:null,
                    email:null,
                    supportphone:null,
                    qq:null,
                    tumblr:null,
                    baidu:null,
                    skype:null,
                    viber:null,
                    sinaweibo:null,
                    line:null,
                    vk:null,
                    reddit:null,
                    tiktok:null,
                }
            }
        },
    }
</script>

<style scoped>

</style>