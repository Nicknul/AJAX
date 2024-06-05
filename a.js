const a = `
https://apis.data.go.kr/6300000/eventDataService/eventDataListJson?serviceKey=n8uIBadsqMx4UqYvGKL7l7l2Gkut99sQyvUHXQJdNhOo0pQQRE0vwEgMMYsptCZ91a4L%2Fna8hWLVrGmNkOQS5w%3D%3D&`;

const b = 'endpoint 주소' + '내가 받은 키의 주소 값';

const keyName = `n8uIBadsqMx4UqYvGKL7l7l2Gkut99sQyvUHXQJdNhOo0pQQRE0vwEgMMYsptCZ91a4L%2Fna8hWLVrGmNkOQS5w%3D%3D`;

const endpoint = `http://apis.data.go.kr/6300000/eventDataService/eventDataListJson?serviceKey=${keyName}&numOfRows=10&pageNo=1`;

console.log(endpoint);
