<template>
	<button
		class="button"
		@click="$emit('click')"
	>
		{{ text }}
	</button>
</template>

<script setup lang="ts">
	const { text } = defineProps<{ text: string }>();
</script>

<style scoped>
	.button {
		border: none;
		background-color: #417520;
		border-radius: 10px;
		color: white;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		padding: 10px 20px;
		font-size: 16px;
		cursor: pointer;
		max-width: 150px;
		margin: 15px;
		transition: all 0.3s ease;
		&:hover {
			background-color: #316118;
		}
	}
</style>
