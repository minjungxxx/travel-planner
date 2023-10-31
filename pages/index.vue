<template>
	<div>
		<search-bar/>
		<google-map/>
		<planner-card/>
	</div>
</template>

<script>
import GoogleMap from '~/components/GoogleMap.vue'
import PlannerCard from '~/components/PlannerCard.vue'
import SearchBar from '~/components/SearchBar.vue'
export default {
  components: { PlannerCard, GoogleMap, SearchBar },
  name: 'IndexPage',
}
</script>
