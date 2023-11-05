export default {
  state: {
    searchedPlaces: [], // 검색한 장소 목록
    centerPlace: {} // 센터로 보여지는 장소
  },
  mutations: {
    pushSearchedPlaces(state, searchedPlace) {
      state.searchedPlaces.push(searchedPlace)
    },
    removeSearchedPlace(state, place) {
      const targetIdx = state.searchedPlaces.findIndex(searchedPlace => searchedPlace.place_id === place.place_id)
      state.searchedPlaces.splice(targetIdx, 1)
    
    },
    setCenterPlace(state, centerPlace) {
      state.centerPlace = centerPlace
    }
  }
}