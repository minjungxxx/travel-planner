<template>
	<div class="map-container">
		<GmapMap
			class="google-map"
			:center="center"
			:zoom="zoom"
		>
			<GmapMarker
				v-for="(place, index) in searchedPlaces"
				:key="index"
				:position="getPosition(place)"
				@click="setCenterPlace(place)"
			/>
		</GmapMap>
	</div>
	
	
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'GoogleMap',
	data() {
		return {
			center: { lat: 37, lng: 126 },
			zoom: 10
		}
	},
	computed: {
		...mapState({
			searchedPlaces: 'searchedPlaces',
			centerPlace: 'centerPlace'
		})
	},
	watch: {
		centerPlace(newVal) {
			this.center = this.getPosition(newVal)
			this.zoom = 15
		}
	},
	mounted () {
		// this.$refs.gmap.$mapPromise.then((map) => {
  	// 	map.setCenter({lat: 37, lng: 129})
		// })
	},
	methods: {
		...mapMutations({
      setCenterPlace: 'setCenterPlace'
		}),
		getPosition(place) {
			const position = {
				lat: place.geometry.location.lat(), 
				lng: place.geometry.location.lng()
			}
			return position
		}
	}
}
</script>

<style>
.google-map {
	width: 70vw;
	height: 80vh
}
</style>