// 1. Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице.

const URL = 'https://jsonplaceholder.typicode.com/users';

const getData = async (URL) => {
	const response = await fetch(URL);
	const data = await response.json();
	return data;
};

try {
	const data = await getData(URL);
	console.log(data);
  let result = data.map(data => data.name);
  console.log(result);
} catch (error) {
	console.log(error);
}


//2. Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.

async function myAsync(url) {
	const response = await fetch(url);
	const json = await response.json();
	return json;
}
const body = document.querySelector('body');
const url = 'https://dog.ceo/api/breeds/image/random';


try {
  for (let i = 0; i < 10; i++) {
    const myData = await myAsync(url);
    console.log(myData.message);
    body.insertAdjacentHTML(
      'beforeend',
      `<figure>
        <img src="${myData.message}" />
      </figure>`
      );
      await new Promise((resolve) => setTimeout(resolve, 3000));
  }  
} catch (error) {
	console.log(error.message);
}
function reload() {
  document.location.reload();
}
setTimeout(reload, 30000);

