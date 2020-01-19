<template>
  <v-card  class="mb-12 bigbox">
        <v-container pa-9 style="position:relative; padding: auto;">
              <v-layout>
                  <v-flex sm3
                        v-for="item in items"
                        :key="item.no"
                        style="position: relative; padding: 10px;">
                    <v-img class="imgre" :src="require('../assets/images/' + item.img)"/>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>

<script>
    export default {
      name: "Myskills",
      data() {
        return {
          items: [
            {no: 1, img:'html.png'},
            {no: 2, img:'css.png'},
            {no: 3, img:'js.png'},
            {no: 4, img:'vue.png'},
            {no: 5, img:'react.png'},
          ],
        }
      }
    }
</script>
<style scoped>
.mb-12{
  max-width:900px;
  height:300px;
}
.imgre{
  position: relative;
  background-color: #FFF;
  border-radius:50px;
  width:100px;
  height: 100px;
  margin:auto;
}
</style>
