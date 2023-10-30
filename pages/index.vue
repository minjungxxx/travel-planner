<template>
	<div>
		<map-container/>
		<planner-card/>
	</div>
</template>

<script>
import MapContainer from '~/components/MapContainer.vue'
import PlannerCard from '~/components/PlannerCard.vue'
export default {
  components: { PlannerCard, MapContainer },
  name: 'IndexPage',
}
</script>
