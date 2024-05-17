<template>
	<input
		v-model="model"
		:type
	/>
</template>

<script setup lang="ts">
	const model = defineModel();

	const { type } = withDefaults(defineProps<{ type?: string }>(), { type: "text" });
</script>

<style scoped></style>
