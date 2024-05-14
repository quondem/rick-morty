<script setup>
	import Card from "./components/Card.vue";
	import { useCharactersStore } from "./store/charactersStore";

	const store = useCharactersStore();
	store.getCharacters();
</script>

<template>
	<div class="cards">
		<Card />
	</div>
</template>

<style scoped>
	.cards {
		width: 100%;
		height: 100%;
	}
</style>
