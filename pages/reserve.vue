<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'ReservePage',
  data() {
    return {
    };
  },
  created() {
    this.changeInfo({ title: '予約' });
  },
  methods: {
    changeInfo(value) {
      this.$store.dispatch('pages/changeInfo', value);
    }
  }
}
</script>
