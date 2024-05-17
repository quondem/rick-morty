<template>
	<article class="card__wrapper">
		<div class="card__img">
			<img
				:src="image"
				alt=""
			/>
		</div>
		<div class="card__content">
			<div class="section">
				<p
					class="link"
					href="#"
					@click.prevent
				>
					<h2>{{ title }}</h2>
				</p>
				<span class="status"
					><span
						class="status__icon"
						:class="status"
					></span
					>{{ status }} - {{ species }}</span
				>
			</div>
			<div class="section">
				<span class="text-gray">Last known location:<br /></span>
				<p
					class="link"
					href="#"
					@click.prevent
				>
					{{ location }}
				</p>
			</div>
			<div class="section">
				<span class="text-gray">First seen in:<br /></span>
				<p
					class="link"
					href="#"
					@click.prevent
				>
					{{ firstSeenRef }}
				</p>
			</div>
		</div>
	</article>
</template>

<script setup lang="ts">
	import axios from "axios";
	import { ref } from "vue";

	const { image, title, status, species, location, firstSeen } = defineProps<{
		image: string;
		title: string;
		status: string;
		species: string;
		location: string;
		firstSeen: string;
	}>();

	let firstSeenRef = ref("");
	const firstSeenLoad = async () => {
		let res = await axios.get(firstSeen);
		firstSeenRef.value = res.data.name;
	};
	firstSeenLoad();
</script>

<style lang="scss" scoped>
	.card {
		&__wrapper {
			width: 600px;
			height: 220px;
			display: flex;
			overflow: hidden;
			background: rgb(60, 62, 68);
			border-radius: 0.5rem;
			margin: 0.75rem;
			box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
			@media (max-width: 650px) {
				flex-direction: column;
				height: initial;
				width: 100%;
			}
		}
		&__img {
			flex: 2 1 0%;
			width: 100%;
			& img {
				width: 100%;
				height: 100%;
				margin: 0;
				opacity: 1;
				transition: opacity 0.5s ease 0s;
				object-position: center center;
				object-fit: cover;
				@media (max-width: 650px) {
					height: 300px;
				}
			}
		}
		&__content {
			flex: 3 1 0%;
			position: relative;
			padding: 0.75rem;
			color: rgb(255, 255, 255);
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			&:first-child {
				-webkit-box-pack: start;
				justify-content: flex-start;
			}
			&:last-child {
				-webkit-box-pack: end;
			}
			& section {
				flex: 1 1 0%;
				display: flex;
				flex-direction: column;
				-webkit-box-pack: center;
				justify-content: center;
			}
			& span {
				font-size: 16px;
			}
			@media (max-width: 650px) {
				pointer-events: none;
				gap: 1.25rem;
			}
		}
	}

	.status {
		display: flex;
		-webkit-box-align: center;
		align-items: center;
		text-transform: capitalize;
		font-size: 16px;
		font-weight: 500;
		&__icon {
			height: 0.5rem;
			width: 0.5rem;
			margin-right: 0.375rem;
			border-radius: 50%;
			&.Alive {
				background: rgb(85, 204, 68);
			}
			&.Dead {
				background: rgb(214, 61, 46);
			}
			&.unknown {
				background: rgb(158, 158, 158);
			}
		}
	}
</style>
