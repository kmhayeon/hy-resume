<template>
    <v-app style="font-family:'Poppins','Open Sans', 'Noto Sans KR';">
      <v-container style="margin-top: 50px; max-width: 1215px !important;">
        <v-flex id="bg">
          <div style="width:1185px; margin-left: auto; margin-right: auto;">
            <div id="APPbar">
              <AppNav/>
            </div>
            <div id="rightSideWrapper">
              <div class="ContentBox">
                <v-content>
                  <Home id="Home"/>
                  <About id="About"/>
                  <Experience id="Resume"/>
                  <!--<Myskills id="Myskils"/>-->
                  <Service id="Work"/>
                  <!--<Getintouch id="Contact"/>-->
                  <Last id="Last"/>
                </v-content>
              </div>
            </div>
          </div>
        </v-flex>
      </v-container>
    </v-app>
</template>

<script>
  import AppNav from './components/AppNav';
  import Home from './components/Home';
  import About from './components/About' ;
  import Experience from './components/Experience';
  //import Myskills from './components/Myskills';
  import Service from './components/Service';
  //import Getintouch from './components/Getintouch';
  import Last from "@/components/Last";


  export default {
  name: 'App',
  components: {
    AppNav,
    Home,
    About,
    Experience,
    //Myskills,
    Service,
    //Getintouch,
    Last
  }}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR|Open+Sans|Poppins&display=swap');

#app{
  background-color:#F6F7FF;
}
#APPbar {
  float:left;
  position:fixed;
  width:260px;
}
#rightSideWrapper {
  width: 900px;
  float: right;
}
#Home,#Last {
  position:relative;
  background-color: #5B72E9;
  border-radius:20px;
  box-shadow:2px 2px 5px 3px #EAEDFE;
}
#About,#Work,#Contact{
  position:relative;
  padding: 65px 55px 70px;
  border-radius:20px;
  box-shadow:2px 2px 5px 3px #EAEDFE;
}
#Resume,#Myskils{
  position:relative;
  padding: 50px 55px 50px;
  border-radius:20px;
  box-shadow:2px 2px 5px 3px #EAEDFE;
}
#Myskils{
  background-color: #4c67e4;
}

</style>
