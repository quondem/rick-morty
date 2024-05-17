<template>
	<select v-model="model">
		<option
			v-for="option in options"
			:value="option"
			:key="option"
		>
			{{ option }}
		</option>
	</select>
</template>

<script setup lang="ts">
	const model = defineModel();

	const { options } = defineProps<{ options: string[] }>();
</script>

<style scoped></style>
