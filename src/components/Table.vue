<template>
  <div class="table">
    <h2 class="table__title">{{title}}</h2>
    <ul class="table__contents">
      <li v-for="(content, key) in contents" :key="key">{{key}} : {{content}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Table extends Vue {
  @Prop(String) title!: string;
  @Prop() contents!: object;
}
</script>

<style lang="scss">
  .table {
    text-align: left;
  }
</style>


