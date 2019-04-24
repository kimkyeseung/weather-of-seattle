<template>
  <div class="hello">
    <h1>{{title}}</h1>

    <section class="location">
      <h2>Location</h2>
      <ul>
        <li>{{location.name}}</li>
        <li>{{location.state}}</li>
        <li>{{location.country}}</li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';

interface location {
  name: string;
  state: string;
  country: string;
}

@Component
export default class Main extends Vue {
  public location: location = null;

  get title(): string {
    return this.$store.state.title;
  }

  async getData() {
    const { data } = await axios.get('https://s3.ap-northeast-2.amazonaws.com/aitrics-home/seattle.json', {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin':'*'
      }
    });
    console.log(data);
    this.location = data.response.place;
  }

  created() {
    this.getData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
