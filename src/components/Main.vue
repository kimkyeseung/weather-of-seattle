<template>
  <div class="main">
    <h1>{{title}}</h1>

    <section class="location">
      <Table
        title="Location"
        :contents="locationContents"></Table>
    </section>

    <section class="cloud">
      <Table
        title="Cloud"
        :contents="cloudContents"></Table>
    </section>

    <section class="weather">
      <Table
        title="Weather"
        :contents="weatherContents"></Table>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Table from '@/components/Table.vue';
import axios from 'axios';
import * as code from '@/helper/code';

@Component({ components: { Table } })
export default class Main extends Vue {
  public locationContents: any = {};

  public cloudContents: any = {};

  public weatherContents: any = {};

  get title(): string {
    return this.$store.state.title;
  }

  get location() {
    return this.$store.state.location;
  }

  get cloud() {
    return this.$store.state.cloud;
  }

  get weather() {
    return this.$store.state.weather;
  }

  async getData() {
    const { data } = await axios.get('https://s3.ap-northeast-2.amazonaws.com/aitrics-home/seattle.json', {
      headers: {
        'Access-Control-Allow-Origin':'*'
      }
    });
    const location = data.response.place;
    this.$store.dispatch('updateLocation', location);
    this.locationContents = {
      city: this.location.name,
      state: code.locationCodes[this.location.state],
      country: code.locationCodes[this.location.country]
    }

    const weather = {
      code: data.response.ob.weatherCoded,
      dateTimeISO: data.response.ob.dateTimeISO,
      tempC: data.response.ob.tempC,
      humidity: data.response.ob.humidity,
      windSpeedKPH: data.response.ob.windSpeedKPH,
    };
    this.$store.dispatch('updateWeather', weather);
    
    const weatherCode = this.weather.code.split(':');
    this.weatherContents  = {
      summary: `${code.coverageCodes[weatherCode[0]] ? `${code.coverageCodes[weatherCode[0]]} ${code.IntensityCodes[1]} ${code.weatherCodes[2]}` : 'no data'}`,
      date: `${new Date(this.weather.dateTimeISO).getFullYear()}-${new Date(this.weather.dateTimeISO).getMonth() + 1}-${new Date(this.weather.dateTimeISO).getDate()}`,
      temperature: this.weather.tempC + ' ℃',
      humidity: this.weather.humidity,
      windspeed: this.weather.windSpeedKPH + 'km/h'
    }

    const cloud = data.response.ob.cloudsCoded;
    this.$store.dispatch('updateCloud', cloud);
    this.cloudContents  = {
      state: code.cloudCode[this.cloud].title,
      description: code.cloudCode[this.cloud].description
    }
  }

  created() {
    this.getData();
  }
}
</script>
