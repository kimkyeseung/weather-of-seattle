import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'Weather of Seattle',
    location: {
      name: '',
      state: '',
      country: ''
    },
    cloud: '',
    weather: {
      code: '',
      dateTimeISO: '',
      tempC: 0,
      humidity: 0,
      windSpeedKPH: 0,
    }
  },
  mutations: {
    updateWeather(state, weather) {
      state.weather = weather;
    },

    updateLocation(state, location) {
      state.location = location;
    },

    updateCloud(state, cloud) {
      state.cloud = cloud;
    }
  },
  actions: {
    updateWeather(context, weather) {
      context.commit('updateWeather', weather);
    },

    updateLocation(context, location) {
      context.commit('updateLocation', location);
    },

    updateCloud(context, cloud) {
      context.commit('updateCloud', cloud);
    }
  }
})
