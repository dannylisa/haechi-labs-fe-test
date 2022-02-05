# 해치랩스 프론트엔드 엔지니어 코딩테스트

# Github Clone
```
git clone https://github.com/dannylisa/haechi-labs-fe-test
```

# Install & Get Started
## Server
1. Henesis API Proxy를 실행합니다.
```
docker run -d -e NODE_ENV=test -p 3000:3000 haechi/henesis-api-proxy:stable
docker ps
docker logs -f <CONTAINER_ID>
```
2. 다음을 실행합니다.
```
cd packages/server
npm install
npm run start
```

## App
1. packages/app 폴더 최상단에 .env 파일 생성 후 아래 내용을 채워넣습니다.
```
REACT_APP_ACCESS_TOKEN={ACCESS_TOKEN}
REACT_APP_API_SECRET={API_SECRET}
```

2. 다음을 실행합니다.
```
cd packages/app
npm install
npm run start
```
3. http://localhost:5000 으로 접속합니다.

# 캡처 화면
## 입출금 목록 화면
![입출금_목록](https://user-images.githubusercontent.com/30591542/152655507-d551bcfd-300e-4597-b0e0-a7223f6cab9f.png)

## 출금 화면
![출금_기본](https://user-images.githubusercontent.com/30591542/152655511-3206b17d-bcec-435c-bc15-877cf461c9f0.png)

## 유효성 체크
![출금_유효성체크](https://user-images.githubusercontent.com/30591542/152655515-26c434c8-e29b-4ebe-8466-d79d6fd0b242.png)

