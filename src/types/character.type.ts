import { Info } from "./global.type";

export interface Character {
	created: string;
	episode: string[];
	gender: string;
	id: number;
	image: string;
	location: { name: string; url: string };
	name: string;
	origin: { name: string; url: string };
	species: string;
	status: string;
	type: string;
	url: string;
}

export interface ServerResponse {
	data: {
		info: Info;
		results: Character[];
	};
	status: number;
	statusText: string;
}
