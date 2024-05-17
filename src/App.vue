<script setup lang="ts">
	import { computed, onMounted } from "vue";

	import Card from "./components/Card.vue";
	import Pagination from "./components/Pagination.vue";
	import Filters from "./components/Filters.vue";

	import { useCharactersStore } from "./store/charactersStore";
	import { storeToRefs } from "pinia";

	onMounted(() => {
		store.loadCharacters();
		store.loadEpisodes();
	});

	const store = useCharactersStore();
	const { characters } = storeToRefs(store);
	const { maxPage } = storeToRefs(store);
	const currentPage = computed({
		get() {
			return store.currentPage;
		},
		set(val: number) {
			store.currentPage = val;
		},
	});
</script>

<template>
	<div class="wrapper">
		<Filters />
		<Pagination
			@paginated="store.loadCharacters()"
			v-model="currentPage"
			:max="maxPage"
		/>
		<div class="cards">
			<Card
				:key="character.id"
				v-for="character in characters"
				:image="character.image"
				:title="character.name"
				:status="character.status"
				:species="character.species"
				:location="character.location.name"
				:firstSeen="character.episode[0]"
			/>
		</div>
		<div class="pagination"></div>
	</div>
</template>

<style scoped>
	.cards {
		width: 100%;
		height: 100%;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
	}
	.pagination {
		margin: 0 auto;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 5px;
		text-align: center;
		color: rgb(245, 245, 245);
	}
	.wrapper {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 20px;
	}
</style>
