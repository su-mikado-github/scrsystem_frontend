<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'CheckinPage',
  data() {
    return {
    };
  },
  created() {
    this.changeInfo({ title: 'チェックイン' });
  },
  methods: {
    changeInfo(value) {
      this.$store.dispatch('pages/changeInfo', value);
    }
  }
}
</script>
