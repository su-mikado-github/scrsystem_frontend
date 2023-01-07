<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'ReserveChangePage',
  data() {
    return {
    };
  },
  created() {
    this.changeInfo({ title: '時間変更' });
  },
  methods: {
    changeInfo(value) {
      this.$store.dispatch('pages/changeInfo', value);
    }
  }
}
</script>
