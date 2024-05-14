import axios from "axios";
import { defineStore } from "pinia";

export const useCharactersStore = defineStore("characters", {
	state: () => {
		return { characters: {} };
	},
	actions: {
		async getCharacters() {
			let res = await axios.get("https://rickandmortyapi.com/api/character/");
			if (res.status == 200) {
			}
		},
	},
});
