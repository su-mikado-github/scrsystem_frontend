<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-content>
            <NuxtLink :to="item.url" class="black--text">{{ item.title }}</NuxtLink>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      items: [
        { id: 1, url: '/checkin', title: 'チェックイン' },
        { id: 2, url: '/reserve', title: '予約' },
        { id: 3, url: '/reserve_change', title: '時間変更' },
        { id: 4, url: '/mypage', title: 'マイページ' },
        { id: 5, url: '/dish_menu', title: 'メニュー' },
        { id: 6, url: '/abort', title: '電話・店舗情報' },
      ]
    };
  },
  created() {
    this.changeInfo({ title: '開発用トップページ' });
  },
  methods: {
    changeInfo(value) {
      this.$store.dispatch('pages/changeInfo', value);
    }
  }
}
</script>
