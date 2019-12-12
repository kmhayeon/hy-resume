<template>
    <div id="head">
        <v-navigation-drawer permanent id="box" height="600px">
         <div id="boxbox">
             <v-img id="img">
                <img src="../assets/images/hy70.png" height="70px" width="70px"/>
             </v-img>
                 <v-list-item>
                     <v-list-item-content>
                         <v-list-item-title class="title" id="tit">HaYeon</v-list-item-title>
                         <v-list-item-subtitle id="subtit">DEVELOPER</v-list-item-subtitle>
                        </v-list-item-content>
                 </v-list-item>
             <v-list id="nav"
                     dense
                     nav
                     >
                 <v-list-item
                     v-for="item in items"
                     :key="item.title"
                     @click.prevent="scrollAnimateTo(item.href)"
                    >
                     <v-list-item-icon id="mu">
                         <v-icon style="font-size:20px; color:#fff;">{{ item.icon }}</v-icon>
                     </v-list-item-icon>
                     <v-list-item-content>
                         <v-list-item-title style="font-size:15px; font-weight:500; color:#fff;">{{ item.title }}</v-list-item-title>
                     </v-list-item-content>
                 </v-list-item>
             </v-list>
         </div>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
  name: "AppNav",
  data() {
    return {
      items: [
        {title: 'Home', icon: 'mdi-home-outline', href: 'Home'},
        {title: 'About', icon: 'mdi-account-outline', href: 'About'},
        {title: 'Resume', icon: 'mdi-school-outline', href: 'Resume'},
        {title: 'Work', icon: 'mdi-layers-outline', href: 'Work'},
        {title: 'Contact', icon: 'mdi-chat-outline',href: 'Contact'},
      ],
      right: null,
    }
  },
  methods: {
    scrollAnimateTo (val) {
      const pos = document.getElementById(val).offsetTop;
      window.scrollTo({
        behavior: 'smooth',
        top: pos
      })
    }
  }
}
</script>

<style scoped>
#box{
    background-color:#4c67e4;
    border-radius:20px;
    box-shadow:2px 2px 5px 3px #EAEDFE;
        }
#img{
    margin: 10px 0 0 10px;
}
#head{
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
#boxbox{
    position: absolute;
    padding:30px;
    width:100%;
    top:0;
    bottom:0;
    left:0;
    right:0;
}
#nav{
    margin-top:20px;
}
#tit{
    margin-top:10px;
    margin-bottom:auto;
    font-family:'Poppins', sans-serif !important;
    font-size:23px !important;
    font-weight:900 !important;
    letter-spacing: 0.0125em !important;
    color: #FFF;
}
#tit::after{
  content: "";
  position: absolute;
  background-color: #FF5959;
  border-radius:50px;
  width:8px;
  height:8px;
  right: 78px;
  bottom: 36px;
}
#subtit{
    margin-top:5px;
    color: #FFF;
    font-size:13px;
    letter-spacing: 0.0125em !important;
}
#mu{
    margin-right:17px;
}
#img{
    position: relative;
    max-width:70px;
    max-height:70px;
}
</style>
