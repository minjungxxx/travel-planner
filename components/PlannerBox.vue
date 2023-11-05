<template>
	<div class="planner-container">
		<div 
			v-for="(place, index) of searchedPlaces" 
			:key="`${place.name}-${index}`" 
			class="place-card"
			@click="setCenterPlace(place)"
		>
			<div class="place-info-area">
				<div class="place-name">{{ place.name }}</div>
				<div class="place-address">{{ place.formatted_address }}</div>
			</div>
			<button class="del-btn" @click="removeSearchedPlace(place)">삭제</button>
		</div>
	</div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
	name: 'PlannerCard',
	computed: {
		...mapState({
			searchedPlaces: 'searchedPlaces'
		})
	},
	methods: {
		...mapMutations({
      setCenterPlace: 'setCenterPlace',
			removeSearchedPlace: 'removeSearchedPlace'
		}),
	}
}
</script>

<style>
.planner-container {
	width: 30vw;
	overflow-y: scroll;
  height: inherit;
}
.place-card {
	border: 1px solid lightgray;
	padding: 20px;
	margin: 10px;
}
.place-name {
	font-size: 16px;
	font-weight: 600;
}
.place-address {
	font-size: 14px;
	font-weight: 400px;
}
</style>