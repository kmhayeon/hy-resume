<template>
    <v-card class="mb-12 bigbox">
        <v-container mb12 style="position:relative">
            <div id="headline"><h3>Experience</h3></div>
            <v-spacer style="height:65px;"></v-spacer>
            <v-form class="mb-9">
                <v-card-text class="py-0"
                             v-for="item in items"
                             :key="item.no"
                             style="position: relative;"
                             >
                    <v-timeline
                        style="left: -10px"
                        dense
                    >
                        <v-timeline-item
                            style="padding-bottom: 40px;"
                            color="#FF5959"
                            small
                        >
                            <v-layout pt-3>
                                <v-flex xs3>
                                    <span class="day">{{item.day}}</span>
                                </v-flex>
                                <v-flex>
                                    <strong class="tit">{{item.title}}</strong>
                                    <div class="subtit">{{item.subtitle}}</div>
                                </v-flex>
                            </v-layout>
                        </v-timeline-item>
                    </v-timeline>
                </v-card-text>
            </v-form>
        </v-container>
    </v-card>
</template>

<script>
    export default {
        name: "Experience",
        data (){
            return {
                items: [
                    {no: 1, day:'2019.02 - 2020.02', title: 'DataRep.Up', subtitle: "Data & Platform팀 근무"},
                    {no: 2, day:'2018.04 - 2018.06', title: 'LUNA SOFT', subtitle: "플랫폼 기획팀 인턴"},
                    {no: 3, day:'2014.03 - 2017.02', title: '계원예술대학교', subtitle: "디지털 미디어과 졸업"},
                ],
                right: null,
            }
        },
    }

</script>

<style scoped>
.mb-12{
    max-width:900px;
    height:650px;
}
#headline{
    color: #000;
    font-family: "Poppins",sans-serif;
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
.mb-9{
    position: relative;
    margin-bottom: auto;
}
.day{
   font-weight: 600; font-size: 13px; font-family: 'Open Sans', sans-serif;
}
.tit{
    font-size: 15px;
    font-family: 'Poppins', sans-serif;
}
.subtit{
    margin-top: 5px;
    font-size: 13px;
    font-family: 'Open Sans', sans-serif;
}
</style>
