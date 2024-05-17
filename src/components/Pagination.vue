<template>
	<input
		:value="props.modelValue"
		@input="
			(e: any) => {
				if (e.target.value) {
					let newVal = e.target.value
					
					if (newVal == 0) {
						emits('update:modelValue', 1);
						$forceUpdate()
						return
					}
					if (newVal && props.max) {
						if (newVal > props.max) {
							emits('update:modelValue', props.max);
							$forceUpdate()
							return
						}			
					}
					emits('update:modelValue',+newVal)
					emits('paginated')
				}
			}
		"
		type="number"
	/>
</template>

<script setup lang="ts">
	// import { watch } from "vue";

	// const model = defineModel({ type: Number });

	const emits = defineEmits(["paginated", "update:modelValue"]);

	const props = defineProps<{ max: number | undefined; modelValue: number }>();

	// watch(model, (newVal, oldVal) => {
	// 	let modified: boolean = true;

	// 	if (newVal == 0) {
	// 		model.value = 1;
	// 		modified = false;
	// 	}
	// 	if (newVal && props.max) {
	// 		if (newVal > props.max) {
	// 			model.value = oldVal;
	// 			modified = false;
	// 		}
	// 	}

	// 	emits("paginated");
	// });
</script>

<style scoped>
	input {
		text-align: center;
		max-width: 50px;
	}
</style>
