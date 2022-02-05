### Henesis API Proxy 연동 서버

- npm install 후 npm start 해줍니다.

만일 [Henesis API 연동](https://docs.henesis.io/docs/getting-started-prepare-to-use-api) docker port가 기본 3000으로 하지 않았을 경우, package.json start 스크립트 TESTNET_API_PORT 값을 현재 띄운 docker port값에 맞게 변경해서 구동하시면 됩니다.

### api call 테스트

get-coins.ts 에 ACCESS_TOKEN, API_SECRET 값을 넣어

```
npm run test:coins
```

명령어로 api call 테스트하실 수 있습니다.

### 관련 문서

- https://www.notion.so/haechilabs/204383f79f734cb2bcc6251ddf0924f6
