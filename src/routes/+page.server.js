export async function load({ fetch }) {
	const response = await fetch(
		'https://fdnd.directus.app/items/person/263'
	);

	const data = await response.json();

	return {
		person: data.data
	};
}