<template>
    <v-card class="mb-12 bigbox">
        <v-container id="wrap">
            <div class="align-self">
                <div>
                    <div id="one">
                        <h1>Thank U</h1>
                    </div>
                </div>
            </div>
        </v-container>
    </v-card>
</template>

<style scoped>
.mb-12{
    max-width:900px;
    height:468px;
}

#wrap {
    position: relative;
    text-align: center;
    padding: auto;
    top: 220px;
    bottom: 0;
    left: 0;
    right: 0;
}
.align-self{
    position:absolute;
    left:130px;
}
#one{
    font-family:'Poppins', sans-serif;
    font-size: 33px;
    font-weight:600;
    line-height:0.7em;
    color: #fff;
}
#one::after{
  content: "";
  position: absolute;
  background-color: #FF5959;
  border-radius:50px;
  width:15px;
  height:15px;
  left: 285px;
}

</style>
