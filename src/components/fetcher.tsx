import appConfig from '../appConfig.json';

function Fetcher(url: string) {
	const newUrl = `${appConfig.baseUrl}${url}`;

	return fetch(newUrl, {
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, PUT',
			'Access-Control-Allow-Headers': 'Content-Type',
			'Content-Type': 'application/json',
		},
	}).then((response) => response.json());
}

export default Fetcher;
