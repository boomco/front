<template>
  <div>
    
<div class="container register">

                <div class="row">
                    <div class="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                        <h3 @click="getsetting" v-text="setting.webname">Welcome</h3>
                        <p v-text="setting.wellcometext"></p>
                        <router-link class="btn btn-primary btn-block "  type="button"  to="Login"><i class="fas fa-user-plus"></i> {{ $t('Ihaveaaccount') }} </router-link>
                    </div>
                    <div class="col-md-9 register-right">
                        <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">{{ $t('Users') }}</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">{{ $t('RequestBranch') }}</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading" v-text="$t('ApplyasUser')"></h3>
                                <div class="row register-form" dir="rtl">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" tabindex="1" class="form-control" :placeholder="$t('Firstname')+'*'"  v-model="register.name" />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" tabindex="2"  class="form-control" :placeholder="$t('Lastname')+'*'" v-model="register.lastname"  />
                                        </div>
                                        <div class="form-group">
                                            <input type="password"  tabindex="5"  class="form-control" :placeholder="$t('Password')+'*'" v-model="register.password" />
                                        </div>


                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="email"  tabindex="3"  class="form-control text-left" :placeholder="$t('YourEmail')+'*'"   v-model="register.email" />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" tabindex="4"  minlength="10" maxlength="10" name="txtEmpPhone" class="form-control text-left" :placeholder="$t('YourMobile')+'*'"  v-model="register.mobile"/>
                                        </div>

                                        <div class="form-group">
                                            <input type="password"  tabindex="6"  class="form-control"  :placeholder="$t('ConfirmPassword')+'*'"   v-model="register.password_confirmation" />
                                        </div>
                                        <input type="submit" @click="registers" class="btnRegister"  :value="$t('Register')" />
                                    </div>
                                    <showerror v-if="error" :errors="error"></showerror>
                                </div>


                            </div>
                            <div class="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <h3  class="register-heading">Apply as a Hirer</h3>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="First Name *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Last Name *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control" placeholder="Email *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" maxlength="10" minlength="10" class="form-control" placeholder="Phone *" value="" />
                                        </div>


                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Password *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Confirm Password *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <select class="form-control">
                                                <option class="hidden"  selected disabled>Please select your Sequrity Question</option>
                                                <option>What is your Birthdate?</option>
                                                <option>What is Your old Phone Number</option>
                                                <option>What is your Pet Name?</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="`Answer *" value="" />
                                        </div>
                                        <input type="submit" class="btnRegister"  :value="$t('Register')" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
  </div>
</template>

<script>
import showerror from "../Custom/Showerror";
export default {
    name:'Register',
    components: {showerror},
    data() {
        return {
            error:{},
            setting:[],
            register:{
                name:null,
                lastname:null,
                email:null,
                password:null,
                mobile:null,
                password_confirmation:null,
            }
        }
    },
   methods:{
       getsetting() {
        let that=this;

           this.$axios.get(this.$url+'syssetting/fa')
            .then(function (response) {
               that.setting = response.data;

            });

       },
       registers(){
           let that=this;

           this.$axios.post(this.$url+'register',this.register)
             .then(function (response) {
                 that.$swal.fire({
                     title: that.$t('RegisterSuccess'),
                     text: that.$t('pleaselogin'),
                     icon: 'success',
                     showCancelButton: false,
                     confirmButtonColor: '#3085d6',
                     cancelButtonColor: '#d33',
                     confirmButtonText: that.$t('Logoin')
                 }).then((result) => {
                     if (result.value) {
                         that.$router.push({name: 'Login'})
                     }
                 });


             })
             .catch((error) => {
             that.error = error.response.data.errors;
         });

       }
    },
  mounted(){
      this.getsetting();
          if(localStorage.token){
              this.$router.push({name: 'UserClinet'});
          }

    }
}
</script>

<style>
.register{
    background: -webkit-linear-gradient(left, #3931af, #00c6ff);
    margin-top: 3%;
    padding: 3%;
}
.register-left{
    text-align: center;
    color: #fff;
    margin-top: 4%;
}
.register-left input{
    border: none;
    border-radius: 1.5rem;
    padding: 2%;
    width: 60%;
    background: #f8f9fa;
    font-weight: bold;
    color: #383d41;
    margin-top: 30%;
    margin-bottom: 3%;
    cursor: pointer;
}
.register-right{
    background: #f8f9fa;
    border-top-left-radius: 10% 50%;
    border-bottom-left-radius: 10% 50%;
}
.register-left img{
    margin-top: 15%;
    margin-bottom: 5%;
    width: 25%;
    -webkit-animation: mover 2s infinite  alternate;
    animation: mover 1s infinite  alternate;
}
@-webkit-keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-20px); }
}
@keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-20px); }
}
.register-left p{
    font-weight: lighter;
    padding: 12%;
    margin-top: -9%;
}
.register .register-form{
    padding: 10%;
    margin-top: 10%;
}
.btnRegister{
    float: right;
    margin-top: 10%;
    border: none;
    border-radius: 1.5rem;
    padding: 2%;
    background: #0062cc;
    color: #fff;
    font-weight: 600;
    width: 50%;
    cursor: pointer;
}
.register .nav-tabs{
    margin-top: 3%;
    border: none;
    background: #0062cc;
    border-radius: 1.5rem;
    width: 28%;
    float: right;
}
.register .nav-tabs .nav-link{
    padding: 2%;
    height: 34px;
    font-weight: 600;
    color: #fff;
    border-top-right-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
}
.register .nav-tabs .nav-link:hover{
    border: none;
}
.register .nav-tabs .nav-link.active{
    width: 100px;
    color: #0062cc;
    border: 2px solid #0062cc;
    border-top-left-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
}
.register-heading{
    text-align: center;
    margin-top: 8%;
    margin-bottom: -15%;
    color: #495057;
}
</style>