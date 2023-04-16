<template>
  <div>
    <v-parallax
        height="350"
        class="parallax"
        :src="merchant.banner"
    >
      <div class="text-center">
        <v-img 
          width="180"
          class="mx-auto"
          :src="merchant.logo">
        </v-img>
        <h2>Ahora puedes pedir Pizzas delivery cuando quieras!</h2>
        <p>¡Sabor que enamora!</p>
        <!-- <v-btn color="secondary">Participar</v-btn> -->
      </div>
    </v-parallax>
  </div>
</template>

<script>
export default {
  computed: {
    merchant() {
      return this.$store.state.merchant
    }
  },
}
</script>

<style scoped>
.parallax {
  /* background-image: url('https://res.cloudinary.com/dku13l2ep/image/upload/v1674829503/Pizza%20Top/Recursos/bg-banner_o324xg.jpg'); */
  background-repeat: no-repeat;
  background-size: cover;
}
.logo {
  width: 320px;
}
</style>