<template>
	<GmapMap
		ref="gmap"
		:center="{lat: 37, lng: 126}"
		:zoom="7"
		map-type-id="terrain"
		style="width: 500px; height: 300px"
	>
	</GmapMap>
</template>

<script>
export default {
  name: 'GoogleMap',
	mounted () {
		this.$refs.gmap.$mapPromise.then((map) => {
  		map.setCenter({lat: 37, lng: 129})
		})
	}
}
</script>

<style>

</style>