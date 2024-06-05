// todo-1 API 인증키 가져오기
const keyName = `n8uIBadsqMx4UqYvGKL7l7l2Gkut99sQyvUHXQJdNhOo0pQQRE0vwEgMMYsptCZ91a4L%2Fna8hWLVrGmNkOQS5w%3D%3D`;

// todo-2 endpoint 주소 가져오기
const endpoint = `https://apis.data.go.kr/6300000/openapi2022/restrnt/getrestrnt?serviceKey=${keyName}&pageNo=1&numOfRows=130`;

// * 콘솔로 확인
console.log(endpoint);
