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
              title: 'D.aid 서비스',
              subtitle: '기획 및 소개서/매뉴얼 제작',
              cont: 'HTML / CSS / Javascript / Vue',
              image: '01.png',
              url: 'https://drive.google.com/file/d/12H8ONTRvwKPPzq8CTwDWfOpyUZTOaA0z/view?usp=sharing'
            },
            {
              title: '다독다독 앱 서비스',
              subtitle: '퍼소나 분석 및 기획서 제작',
              cont: '개인 프로젝트',
              image: '02.png',
              url: 'https://drive.google.com/file/d/1LIYl_tUPhT0gVSyPDUJAlwpQMNuIrPmK/view?usp=sharing'
            },
            {
              title: '네이버페이 기능 개선안',
              subtitle: '개선안 기획서 제작',
              cont: '개인 프로젝트',
              image: '03.png',
              url: 'https://drive.google.com/file/d/1utqaEpNKZ8wzXaJ9WbnAaEEuhEWGcdH3/view?usp=sharing'
            },
            {
              title: '옐로우버스 서비스',
              subtitle: '프론트엔드 개발',
              cont: 'HTML / Sass / React / Bootstrap',
              image: '05.png',
              url: 'https://drive.google.com/file/d/1OArp7tiz1N_x1d8YdTPf40sJFiCB9dWq/view?usp=sharing'
            },
            {
              title: '상담톡 플로우 정리',
              subtitle: '챗봇 플로우 정리',
              cont: '인턴 프로젝트',
              image: '04.png',
              url: 'https://drive.google.com/file/d/1KussC4EDzLW38yYF2eXmEwDBlh3DKyhT/view?usp=sharing'
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
    height:750px;
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
