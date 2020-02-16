<template>
    <div >

        <div class="row headeofpage">
            <div class="col-sm-2 settingbar">
                    <a class="icon-rotate mr-2 icofont-gear-alt"></a>
                    <a class="icon-rotate mr-2 icofont-notification"></a>




            </div>
            <div class="col-sm-8 text-right pt-3 text-dark"  dir="rtl" style="margin-right: -20px;">
                <span class="icofont-ui-user p-4"></span>
                    <span v-text="user.name"></span><span v-if="user.lastname" v-text="user.lastname"></span> {{ $t('wellcome')}}

                </div>
                <div class="col-sm-2 ">
                    <div class="logoarmi">
                        <strong>TISS|</strong>
                        <span>ENGINE</span>
                    </div>
                    <div class="col-sm-12 text-center tiss-version">
                        TissEngine <i> V2.0</i>
                    </div>
                </div>
            </div>

        <div class="col-sm-12  mainback">

            <breadcrumb></breadcrumb>

            <component :is="dynamicComponent"></component>
        </div>

        <div class="col-sm-2 h-100  ">
            <menus></menus>
        </div>
        </div>

</template>

<script>
    import breadcrumb from "./pages/breadcrumb";
    import dashborad from "./pages/dashborad";
    import about from '../About/AboutSoftware'
    import menus from "./admin/menu";
    import users from "./admin/Users/users";
    import post from "./admin/Users/post";
    import articlegroup from "./blog/articlegroup";
    import articlelist from "./blog/articlelist";
    import editarticle from "./blog/editarticle";
    export default {
            name: "Dashboard",
        components: {
            menus,
            about,
            post,
            users,
            breadcrumb,
            dashborad,
            articlegroup,
            articlelist,
            editarticle
        },
        data(){
            return{

                user:{},
                menu: [
                    {
                        header: true,
                        title: this.$t('dashboard'),
                        hiddenOnCollapse: true
                    },
                    {
                        href: '#',
                        title:  this.$t('home'),
                        icon: 'icofont-home'
                    },
                    {
                        title: this.$t('Article'),
                        icon: 'icofont-document-folder',
                        child: [
                            {
                                icon: 'icofont-ui-folder',
                                href: '#articlegroup',
                                title: this.$t('articlegroup')
                            },
                            {
                                icon: 'icofont-listing-box',
                                href: '#textlist',
                                title:  this.$t('textlist')
                            },
                            {
                                icon: 'icofont-multimedia ',
                                href: '#editarticle',
                                title: this.$t('newarticle')
                            }
                        ]
                    },
                    {

                        title: this.$t('Setting'),
                        icon: 'icofont-ui-settings',
                        child: [
                            {
                                icon: 'icofont-settings',
                                href: '#setting',
                                title: this.$t('Setting')
                            },
                            {
                                icon: 'icofont-page',
                                href: '#firstpage',
                                title: this.$t('firstpage')
                            },
                            {
                                icon: 'icofont-info-circle',
                                href: '#about',
                                title: this.$t('aboutpage')
                            },
                        ]
                    },
                    {

                        title: this.$t('other'),
                        icon: 'icofont-star',
                        child: [
                            {
                                icon: 'icofont-picture',
                                href: '#gallery',
                                title: this.$t('gallery')
                            },
                            {
                                icon: 'icofont-info',
                                href: '#about',
                                title: this.$t('about')
                            },
                        ]
                    },
                    {
                        href: '',
                        title: this.$t('Banners'),
                        icon: 'icofont-ui-home',
                        child: [
                            {
                                icon: 'icofont-ui-add ',
                                href: '#addbanner',
                                title: this.$t('addbanner')
                            },
                            {
                                icon: 'icofont-list ',
                                href: '#listourbanners',
                                title: this.$t('listourbanners')
                            },
                            {
                                icon: 'icofont-listine-dots ',
                                href: '#listallbanner',
                                title: this.$t('listallbanner')
                            },
                        ]
                    },
                    {
                        href: '',
                        title: this.$t('bannertools'),
                        icon: 'icofont-cubes',
                        child: [
                            {
                                icon: 'icofont-location-pin ',
                                href: '#locations',
                                title: this.$t('locations')
                            },
                            {
                                icon: 'icofont-ui-tag ',
                                href: '#typebanner',
                                title: this.$t('typebanner')
                            },
                            {
                                icon: 'icofont-plugin ',
                                href: '#Attributes',
                                title: this.$t('Attributes')
                            },
                        ]
                    },
                    {
                        href: '',
                        title: this.$t('users'),
                        icon: 'icofont-users-alt-5',
                        child: [
                            {
                                icon: 'icofont-listing-box ',
                                href: '#users',
                                title: this.$t('listusers')
                            },
                            {
                                icon: 'icofont-ruler-pencil-alt-1 ',
                                href: '#post',
                                title: this.$t('post')
                            },
                        ]
                    },
                ],
                dynamicComponent:'dashborad'

            }
        },

        methods:{
            profileshow(){
                let that=this;

               this.$axios.get(this.$url+'user/profile',{headers:{Authorization:localStorage.token}})
                   .then(function (response) {
                       that.user=response.data;
                   });


                   },

            cpage(page){
                this.dynamicComponent=page;
            }

        },
        watch: {
            $route (to, from){
                this.dynamicComponent = window.location.hash.substring(1).split('#')[0];
                if(this.dynamicComponent==''){

                    this.dynamicComponent='dashborad';
                }
            },
            dynamicComponent: function (val) {
            }
        },
        mounted() {
            this.profileshow();
       this.dynamicComponent = window.location.hash.substring(1).split('#')[0];

            if(this.dynamicComponent==''){

                this.dynamicComponent='dashborad';
            }
        }
    }
</script>

<style scoped>

    @import "../../assets/icofont/icofont.min.css";

    .mainback{
        background-color: #e8e8e8;
        height: 100%;
        padding-bottom: 100%;
    }
    .bg-gray{
        background-color: #cdcdc9;
        height:100%;
        color: #fff;
        min-height: 500px;
    }
    .bg-blue-dark{
        background-color: #367FA9;;
    }
    .tiss-navicon{
        color:#fff;
        font-size: 24px;
        margin-top: 10px;
    }
    .tiss-cursure{
        cursor: pointer;
    }
    .tiss-version{
        font-size: 10px;
        color:#999;
        font-style: italic;

    }
    .settingbar{
        padding-top: 20px;
        padding-left: 50px;
    }
    .settingbar *{
        font-size: 25px;
        color:transparent;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #333;
        cursor: pointer;


    }
.headeofpage{
        background-color: #eee;
    border-bottom: solid #333 1px;
    padding-bottom: 20px;

}
    .logoarmi{

        text-align: center;
        padding-top: 5%;
        color:#333;
        font-size: 17px;
    }
    .icon-rotate:hover{
        animation: iconrotate ease-in 1s;
        animation-iteration-count: 1;
        transform-origin: 50% 50%;

    }

    @keyframes iconrotate{
        0% {
            transform:  rotate(0deg) ;
        }
        100% {
            transform:  rotate(-44deg) ;
        }
    }
    .wmaster{
        margin-top: 8px;
        background-color: #ffff;
        height: 200px;
        -webkit-box-shadow: -4px 6px 5px -4px rgba(176,173,176,1);
        -moz-box-shadow: -4px 6px 5px -4px rgba(176,173,176,1);
        box-shadow: -4px 6px 5px -4px rgba(176,173,176,1);
        border-radius: 15px;
        overflow: hidden;

    }
</style>