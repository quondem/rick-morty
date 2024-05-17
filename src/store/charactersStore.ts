import axios from "axios";
import { defineStore } from "pinia";
import { Character, ServerResponse } from "../types/character.type";
import { Episode, EpisodeResponse } from "../types/episodes.type";
import { Info } from "../types/global.type";

interface State {
	characters: Character[];
	charactersInfo: Info | null;
	episodes: Episode[];
	episodesInfo: Info | null;
	currentPage: number;
	filters: {
		name: string;
		status: string;
	};
}

const defaultState: State = {
	characters: [],
	charactersInfo: null,
	episodes: [],
	episodesInfo: null,
	currentPage: 1,
	filters: {
		name: "",
		status: "",
	},
};

export const useCharactersStore = defineStore("characters", {
	state: () => {
		return defaultState;
	},

	getters: {
		maxPage: state => state.charactersInfo?.pages,
	},

	actions: {
		async loadCharacters() {
			try {
				const params = { name: this.filters.name ? this.filters.name : undefined, status: this.filters.status ? this.filters.status : undefined, page: this.currentPage };

				let res: ServerResponse = await axios.get("https://rickandmortyapi.com/api/character/", { params });
				if (res?.status == 200) {
					this.characters = res.data.results;
					this.charactersInfo = res.data.info;
				}
			} catch (err) {
				this.characters = [];
			}
		},

		async loadEpisodes() {
			let res: EpisodeResponse = await axios.get("https://rickandmortyapi.com/api/episode");
			this.episodes = res.data.results;
			this.episodesInfo = res.data.info;
			console.log(this.episodes);
		},
	},
});
