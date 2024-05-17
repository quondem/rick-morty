<template>
	<div class="filters">
		<Input v-model="filters.name" />
		<Select
			v-model="filters.status"
			:options="options"
		/>
	</div>
	<Button
		@click="
			() => {
				store.currentPage = 1;
				store.loadCharacters();
			}
		"
		text="Применить"
	/>
</template>

<script setup lang="ts">
	import Input from "./ui/Input.vue";
	import Select from "./ui/Select.vue";
	import Button from "./ui/Button.vue";

	import { useCharactersStore } from "../store/charactersStore";
	import { storeToRefs } from "pinia";

	const options = ["", "Dead", "Alive", "unknown"];

	const store = useCharactersStore();
	const { filters } = storeToRefs(store);
</script>

<style scoped>
	.filters {
		display: flex;
		gap: 5px;
	}
</style>
