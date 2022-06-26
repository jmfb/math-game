async function checkStatus(response: Response) {
	const { ok, status, statusText } = response;
	if (!ok) {
		const error = await response.text();
		const errorMessage = `${status} - ${statusText}\n${error}`;
		throw new Error(errorMessage);
	}
}

interface IGetRequest {
	endpoint: string;
}

export async function get<T>(request: IGetRequest) {
	const { endpoint } = request;
	const response = await fetch(endpoint, {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	});
	await checkStatus(response);
	return (await response.json()) as T;
}
