import { Info } from "./global.type";

export interface Episode {
	air_date: string;
	characters: string[];
	created: string;
	episode: string;
	id: number;
	name: string;
	url: string;
}

export interface EpisodeResponse {
	data: {
		results: Episode[];
		info: Info;
	};
	status: number;
	statusText: string;
}
