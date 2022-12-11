<template>
<div>
    <v-alert v-if="!!alertText" type="error" dismissible @input="alert_input">{{ alertText }}</v-alert>
    <v-card>
        <v-card-title>サンプル</v-card-title>
        <v-card-subtitle v-if="flag">～サブタイトル</v-card-subtitle>
        <v-card-text>
            これはcardサンプルです。
        </v-card-text>
        <v-card-actions>
            <v-btn @click="btn_click">Click !!</v-btn>
        </v-card-actions>
    </v-card>
</div>
</template>

<script>
export default {
    data() {
        return {
            flag: false,
            alertText: null,
        }
    },
    methods: {
        btn_click() {
            this.alertText = "Clicked !!"
        },
        alert_input() {
            this.alertText = null
        }
    }
}
</script>
