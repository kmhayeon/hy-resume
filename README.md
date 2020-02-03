# my-web

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Comment
1. 현재 앱에는 Vue, Vuetify를 사용하였습니다.
2. Node.js Process Manager(pm2)를 'npm install pm2 -g' 로 설치하고 Nginx로 연결한 후 Nginx내에 hacodding을 만들고, hacodding내에 /뒷주소를 검색하면 그에 맞는 장소(페이지)에 따라 해당 장소(페이지)로 인도된다.
3. Node.js를 이용하여 이메일 서버를 구축하였으며, 서버에서 메일을 보낼 수 있는 메일 전송 모듈인 nodemailer의 사용을 위해 'npm install nodemailer --save' 명령어로 설치하였습니다.
4. icon 사용을 위해 Material Design을 이용하였습니다.
