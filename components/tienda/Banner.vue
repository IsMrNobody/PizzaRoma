<template>
  <div>
    <v-img width="100vw" height="280" :src="merchant.banner">
      <v-card class="transparent ma-5 text-center" flat>
        <v-img width="150" class="mx-auto" :src="merchant.logo"></v-img>
        <!-- <h2>{{ merchant.name }}</h2> -->
        <h3>{{ merchant.slogan }}</h3>
        <p class="primary--text">Lunes a Domingo de 11am a 11pm </p>
        <p class="black">Contamos con servicio de entrega a domicilio y pick up</p>
        <!-- <v-btn color="pink">Buy</v-btn> -->
      </v-card>
    </v-img>
  </div>
</template>

<script>
export default {
  props: {
    merchant: {
      type: Object,
      default: () => {}
    }
  }
}
</script>