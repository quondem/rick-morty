<template>
	<article class="card__wrapper">
		<div class="card__img">
			<img
				:src="img"
				alt=""
			/>
		</div>
		<div class="card__content">
			<div class="section">
				<a
					href="#"
					@click.prevent
				>
					<h2>{{ title }}</h2>
				</a>
				<span class="status"><span class="status__icon active"></span>{{ status }}</span>
			</div>
			<div class="section">
				<span class="text-gray">Last known location:</span>
				<a
					href="#"
					@click.prevent
					>{{ location }}</a
				>
			</div>
			<div class="section">
				<span class="text-gray">First seen in:</span>
				<a
					href="#"
					@click.prevent
					>{{ firstSeen }}</a
				>
			</div>
		</div>
	</article>
</template>

<script setup lang="ts">
	const { img } = defineProps<{
		img: string;
		title: string;
		status: string;
		location: string;
		firstSeen: string;
	}>();
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
			}
		}
		&__content {
			flex: 3 1 0%;
			position: relative;
			padding: 0.75rem;
			color: rgb(255, 255, 255);
			display: flex;
			flex-direction: column;
			&:first-child {
				-webkit-box-pack: start;
				justify-content: flex-start;
			}
			&:last-child {
				-webkit-box-pack: end;
				justify-content: flex-end;
			}
			& section {
				flex: 1 1 0%;
				display: flex;
				flex-direction: column;
				-webkit-box-pack: center;
				justify-content: center;
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
			&_active {
				background: rgb(85, 204, 68);
			}
			&_inactive {
				background: rgb(214, 61, 46);
			}
		}
	}
</style>
