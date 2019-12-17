<template>
    <v-card class="mb-12 bigbox">
        <v-container mb12 style="position:relative">
            <div id="headline"><h3>Get in touch</h3></div>
            <v-spacer style="height:70px;"></v-spacer>
            <v-form>
                <v-layout row>
                    <v-flex sm4>
                        <div v-for="item in items"
                             :key="item.title">
                            <h3 style="font-size:17px;">
                                <v-icon color="#FF5959" style="padding-right: 13px;">{{item.icon}} </v-icon>{{ item.title }}</h3>
                            <div class="imsub">{{item.sub}}</div>
                            <v-spacer class="mb-6"></v-spacer>
                        </div>
                    </v-flex>
                    <v-flex sm8>
                        <v-layout wrap>
                            <v-flex sm6>
                                <v-text-field class="txtfield"
                                                     style="padding-right: 10px;"
                                                     label="Your name"
                                                     outlined
                                                     rounded
                                                     dense
                        ></v-text-field>
                    </v-flex>
                    <v-flex sm6>
                        <v-text-field class="txtfield"
                                      label="Email Address"
                                      outlined
                                      rounded
                                      dense
                        ></v-text-field>
                    </v-flex>
                        </v-layout>
                                <v-text-field
                                    class="txtfield"
                                    label="Subject"
                                    outlined
                                    rounded
                                    dense
                                ></v-text-field>
                                <v-textarea
                                    class="txtfield"
                                    label="Message..."
                                    auto-grow
                                    outlined
                                    rounded
                                    rows="1"
                                    row-height="100"
                                ></v-textarea>
                                <v-btn
                                        type="submit"
                                        id="btnsm"
                                        rounded
                                        color="#FF5959"
                                        dark
                                        @click="sendEmail"
                                >Submit Message</v-btn>
                    </v-flex>
                </v-layout>
            </v-form>
        </v-container>
    </v-card>
</template>
<script>

    export default {
        name: "Getintouch",
        data() {
            return {
                items: [
                    {title: 'Phone', sub: "010-2715-9304", icon: 'mdi-phone-outline'},
                    {title: 'Email address', sub: "kmhayeon12@gmail.com", icon: 'mdi-email-outline'},
                    {title: 'Location', sub: "Republic of Korea", icon: 'mdi-map-marker-outline'},
                ],
                right: null,
            }
        },
    }

</script>
<style scoped>
.mb-12{
    max-width:900px;
    height:600px;
}
#headline{
    color: #000;
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    font-weight: 700;
}
#headline::after {
    content: "";
    background: #FF5959;
    border-radius: 25px;
    display: block;
    margin-top: 14px;
    width: 30px;
    height: 5px;
}
.imsub{
    margin-left: 38px;
    margin-right: 38px;
    color: #777;
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
}
.txtfield{
    color:#486CD9;
    font-family: 'Open Sans', sans-serif;
}
#btnsm{
    width:150px;
    height:40px;
    font-size:13px;
}
</style>
