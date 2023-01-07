<template>
  <v-app light>
    <v-app-bar
      :clipped-left="clipped"
      app
      light
    >
      <v-toolbar-title>{{ title ?? '（不明）' }}</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
      light
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: true,
      fixed: true,
//      title: '食堂予約システム（仮）'
    }
  },
  computed: {
    title() {
      return this.$store.getters['pages/title'];
    }
  },
  watch: {
//    info() {
      //
//    }
  }
}
</script>
