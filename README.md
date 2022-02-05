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
