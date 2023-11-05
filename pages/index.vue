<template>
	<div>
		<search-bar/>
		<div class="map-planner-container">
			<google-map/>
			<planner-box/>
		</div>
	</div>
</template>

<script>
import GoogleMap from '~/components/GoogleMap.vue'
import PlannerBox from '~/components/PlannerBox.vue'
import SearchBar from '~/components/SearchBar.vue'
export default {
	name: 'Index',
  components: { PlannerBox, GoogleMap, SearchBar },
}
</script>
<style>
body {
	margin: 0 auto;
}
.map-planner-container {
	display: flex;
	height: 80vh;
}
</style>
