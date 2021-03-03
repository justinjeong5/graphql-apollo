# GraphQL

```bash
> cd server
> npm i
> npm run dev
# server is running at http://localhost:4000
```
```bash
> cd client
> npm i
> npm run dev
# server is running at http://localhost:3000
```

## REST API란?
요청방식 + URI을 이용하여 정보를 주고 받는 형식 
```javascript
http://localhost:3000/api/department/2
```

### REST API의 한계
- OverFetching
- UnderFetching
- N+1 selects problem

## GraphQL
- Overfetching을 막을 수 있다.
- UnderFetching이 해결되며, api 요청 횟수가 감소된다.

