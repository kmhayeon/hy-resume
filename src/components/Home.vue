<template>
    <v-card class="mb-12 bigbox">
        <v-container id="wrap">
            <div class="align-self">
                <div>
                    <div id="one">
                        <h1>I'm Hayeon</h1>
                    </div>
                    <div id="two">
                        안녕하세요.<p>자유로운 사고와 풍부한 호기심을 가진 기획자 김하연입니다.</p>
                    </div>
                    <div class="btn">
                        <v-btn id="btn1"
                               rounded
                               color="#FF5959"
                               dark
                               @click="scrollAnimateTo('Work')"
                        >
                            <v-icon class="icon">mdi-widgets</v-icon>View Portfolio
                        </v-btn>
                        <v-btn id="btn2"
                               outlined
                               color="#FFF"
                               dark
                               rounded
                        >

                            <!--@click.prevent="scrollAnimateTo('Contact')"-->
                            <v-icon class="icon">mdi-email-outline</v-icon>
                            <a class="email" href="mailto:kmhayeon12@gmail.com">Hire me</a>
                        </v-btn>
                    </div>
                </div>
            </div>
        </v-container>
    </v-card>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                items: [
                    {tit:'View Portfolio',href: 'Work'},
                   /* {tit:'Hire me',href: 'Contact'},*/
                ],
            }
        },
        methods: {
            scrollAnimateTo (val) {
                const pos = document.getElementById(val).offsetTop;
                window.scrollTo({
                    behavior: 'smooth',
                    top: pos
                })
            },
        }
    }
</script>

<style scoped>
.mb-12{
    max-width:900px;
    height:600px;
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
    left: 376px;
}
#two{
    text-align: left;
    margin-top:40px;
    margin-bottom:30px;
    font-family: 'Open Sans', sans-serif;
    font-size:14px;
    font-weight:400;
    line-height:1.5em;
    color: #fff;
}
.btn{
    text-align: left;
}
#btn1{
    margin: 0 10px 0 0;
    width:180px;
    height:44px;
    font-size:13px;
}
#btn2{
    width:140px;
    height:45px;
    font-size:13px;
}
.icon{
    margin-right: 5px;
    margin-top:1px;
    color:#fff;
    font-size:16px;
}

.email{
  color: #FFFFFF;
  text-decoration:none;
}
</style>
