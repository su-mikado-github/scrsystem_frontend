<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'MypagePage',
  data() {
    return {
    };
  },
  created() {
    this.changeInfo({ title: 'マイページ' });
  },
  methods: {
    changeInfo(value) {
      this.$store.dispatch('pages/changeInfo', value);
    }
  }
}
</script>
