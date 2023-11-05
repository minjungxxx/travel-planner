<template>
  <div class="search-container">
    <GmapAutocomplete
      class="search-input"
			placeholder="검색할 장소를 입력해주세요."
			@place_changed="setPlace"
		/>
		<button class="add-btn" @click='addMarker'>추가</button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'SearchBar',
  data() {
		return {
      searchedPlace: null,
      value: ''
		}
	},
  methods: {
		...mapMutations({
			pushSearchedPlaces: 'pushSearchedPlaces',
      setCenterPlace: 'setCenterPlace'
		}),
		setPlace(place) {
      this.searchedPlace = place
      this.setCenterPlace(this.searchedPlace)
			this.addMarker()
    },
    addMarker() {
      if (this.searchedPlace) {
				this.pushSearchedPlaces(this.searchedPlace)
        this.searchedPlace = null
      }
		}
	}
}
</script>

<style>
.search-container {
  width: 100vw;
  text-align: center;
  margin: 20px 0;
}
.search-input {
  width: 50%;
  height: 30px;
  border: 1px solid lightgray;
  padding: 3px 10px;
}
.add-btn {
  width: 100px;
  height: 30px;
  border: 0px;
  background: lightgray;
  border-radius: 10px;
}
</style>