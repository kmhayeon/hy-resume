<template>
    <v-card class="mb-12 bigbox">
        <v-container mb12 style="position:relative">
            <div id="headline"><h3>About me</h3></div>
            <v-spacer style="height:40px;"></v-spacer>
            <v-layout row wrap flex md12 style="position:relative; margin: auto;">
                <v-flex sm4 style="padding: 10px">
                    <v-img class="img">
                      <img src="../assets/images/hy150.png" height="150" width="150"/>
                    </v-img>
                </v-flex>
                <v-flex sm8>
                    <v-layout row wrap style="position:relative; padding: 10px; margin: auto;">
                      <v-flex mb12>
                        <h2>Hello,</h2>
                        <v-spacer style="height:20px;"></v-spacer>
                         <div id="subtit1">안녕하세요, 김하연입니다.</div>
                          <v-spacer style="height:20px;"></v-spacer>
                            <v-layout row wrap style="margin-right: -10px; margin-left: -0px;">
                              <v-flex mb6 class="flex1">
                                <v-flex mb3 class="flex2">
                                  <span class="span"> Name:</span> Hayeon kim
                                </v-flex>
                                <v-flex mb3 class="flex2">
                                  <span class="span">Birthday:</span> 28 December, 1994
                                </v-flex>
                              </v-flex>
                              <v-flex mb6 class="flex1">
                                <v-flex mb3 class="flex2">
                                  <span class="span">Location:</span> Republic of Korea
                                </v-flex>
                                <v-flex mb3 class="flex2">
                                  <span class="span">Email:</span> kmhayeon12@gmail.com</v-flex>
                              </v-flex>
                            </v-layout>
                              <v-spacer style="height:20px;"></v-spacer>
                            <div>
                              <v-btn id="btndc"
                                     rounded color="#FF5959"
                                     dark
                                     @click="downloadCV(1)"
                              >
                                <v-icon class="icon">mdi-cloud-download</v-icon>Download CV</v-btn>
                              <v-btn id="btnhm"
                                     rounded color="#4c67e4"
                                     dark
                                     @click="downloadCV(2)"
                              >
                                <v-icon class="icon">fab fa-github</v-icon>git hub</v-btn>
                            </div>
                      </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>

<script>
    export default {
      name: "About",
      data() {
        return {
          url: 'https://drive.google.com/open?id=13v6L_HAvhWDx8ggsGhNsPlFzyUB3_FlC',
          gitHubUrl: 'https://github.com/kmhayeon?tab=repositories'
        }
      },
      methods: {
        scrollAnimateTo(val) {
          const pos = document.getElementById(val).offsetTop;
          window.scrollTo({
            behavior: 'smooth',
            top: pos
          })
        },
        downloadCV(val){
          if (val == 1) {
            location.href=this.url;
          } else if (val ==2) {
            location.href=this.gitHubUrl
          }
        }
      }
    }

</script>

<style scoped>
.mb-12{
  max-width:900px;
  height:500px;
}
#headline{
    color: #000;
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    font-weight: 700;
}
#headline::after {
    content: "";
    background: #ff5959;
    border-radius: 25px;
    display: block;
    margin-top: 14px;
    width: 30px;
    height: 5px;
}
.img{
  position: relative;
  max-width:150px;
  max-height:150px;
}
#subtit1{
  color:#777;
  font-size: 14px;
  font-family:'Open Sans', sans-serif;
}
.flex1{
  font-size: 14px;
  font-family:'Open Sans', sans-serif;
}
.flex2{
  margin-bottom:.5rem;
}
.span{
  color:#777;
}
#btndc{
  margin: 0 10px 0 0;
  width:155px;
  height:40px;
  font-size:12px;
}
#btnhm{
  width:120px;
  height:40px;
  font-size:12px;
}
.icon{
  color:#fff;
  font-size:16px;
  margin-right: 5px;
  margin-top:1px;
}
</style>
