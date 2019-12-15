<template>
    <v-card class="mb-12 bigbox">
            <div id="headline"><h3>Portfoilo</h3></div>
            <v-spacer style="height:100px;"></v-spacer>
        <v-layout>
            <v-row class="fill-height" align="center" justify="center">
                <template
                    v-for="(item, i) in items"
                >
                    <v-col
                            :key="i"
                            cols="12"
                            md="4"
                            style="max-width:260px; max-height: 210px;"
                    >
                        <v-hover v-slot:default="{ hover }">
                            <v-card>
                                <v-img
                                        :src="require('../assets/images/' + item.image)"
                                        height="180px"
                                        @click="card(item.url)"
                                >
                                  <div  v-if="hover"
                                          class="transition-fast-in-fast-out white--text">
                                    <v-card-title>
                                        <v-row
                                                class="fill-height flex-column"
                                                justify="space-between"
                                        >
                                                <div class="mt-4 subheading text-left" id="text">
                                                  {{ item.title }}
                                                </div>
                                                <div class="subtext">
                                                    {{item.subtitle}}
                                                </div>
                                                <div class="subtext">
                                                    {{item.cont}}
                                                </div>
                                        </v-row>
                                    </v-card-title>
                                    </div>
                                </v-img>
                            </v-card>
                        </v-hover>
                    </v-col>
                </template>
            </v-row>
          </v-layout>
    </v-card>
</template>

<script>
    export default {
      name: "Service",
      data() {
        return {
          items: [
            {
              title: 'D.aid',
              subtitle: '기획 및 프론트엔드 개발',
              cont: 'HTML / CSS / jQuery / Vue',
              image: 'con1.png',
              url: 'http://www.daid.co.kr'
            },
            {
              title: 'Project',
              subtitle: '기획 및 프론트엔드 개발',
              cont: 'HTML / CSS / jQuery / React',
              image: 'con1.png',
              url: 'http://www.naver.com'
            },
            {
              title: 'Hayeon',
              subtitle: '기획 및 프론트엔드 개발',
              cont: 'HTML / CSS / jQuery / Vue',
              image: 'con1.png',
              url: 'https://www.hacoding.com/'
            },
          ],
        }
      },
      methods: {
        card(url) {
          location.href = url;
        }
      }
    }
</script>

<style scoped>
.mb-12{
    max-width:900px;
    height:600px;
}
#headline{
    color: #000;
    font-family:'Poppins', sans-serif;
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
.transition-fast-in-fast-out {
    position: absolute;
    width: 100%;
    height:100%;
    bottom: 0;
    opacity:.9;
    cursor: pointer;
    background-color: #FF5959;
    transition: all .3s;
}
#text{
    padding-left: 10px;
    padding-top:10px;
    font-weight: 900;
    font-family: 'Poppins', sans-serif;
    position:relative;
}
.subtext{
    padding-left: 10px;
    font-size: 0.65em;
    font-weight: 400;
    font-family: 'Open Sans', sans-serif;
}
</style>
