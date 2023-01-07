<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'AbortPage',
  data() {
    return {
    };
  },
  created() {
    this.changeInfo({ title: '電話・店舗情報' });
  },
  methods: {
    changeInfo(value) {
      this.$store.dispatch('pages/changeInfo', value);
    }
  }
}
</script>
