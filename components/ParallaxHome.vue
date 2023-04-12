<template>
  <div>
    <!-- <v-img class="ponke d-none d-sm-flex" src="https://res.cloudinary.com/dku13l2ep/image/upload/v1674686394/DaniPotter/libro_gapcvp.png"></v-img> -->
    <v-parallax
        height="350"
        class="parallax"
        src="https://res.cloudinary.com/dku13l2ep/image/upload/v1674829503/Pizza%20Top/Recursos/bg-banner_o324xg.jpg"
    >
      <div class="text-center">
        <v-img 
          width="180"
          class="mx-auto"
          :src="merchant.logo">
        </v-img>
        <h2>Ahora puedes comprar Pizzas congeladas cuando quieras!</h2>
        <p>Participa en nuestra promocion y lleva gratis una pizza congelada</p>
        <v-btn color="secondary">Participar</v-btn>
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
.ponke {
  position: absolute;
  z-index: 1;
  left: 50px;
  margin-top: -80px;
  width: 120px;
  rotate: 45deg;
}
</style>