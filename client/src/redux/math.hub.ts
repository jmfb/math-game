import { get } from './hub';

export async function getVersion() {
	return await get<string>({ endpoint: '/version.json' });
}
