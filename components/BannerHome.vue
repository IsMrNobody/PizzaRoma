<template>
    <div class="text-center">      
      
      <div class="mb-5" justify="center">
        <h3 class="tex primary--text">Servicio Delivery</h3>
        <h2>Puedes realizar tu pedido por Delivery o Pick up</h2>
        <v-btn outlined color="primary" to="/menu" class="mt-8 mb-10">Ver Menu</v-btn>
      </div>
      <hr class="secondary">
      <v-col sm="7" cols class="mx-auto">
        <h2 class="primary--text">En Pizza Roma ofrecemos un servicio de calidad!</h2>
      </v-col>
      <SliderHome />
      <!-- <hr class="secondary"> -->
      <hr class="secondary">
      <!-- <v-btn outlined class="mt-5" color="pink lighten-3">See more!</v-btn> -->
    </div>
</template>

<script>
// import SliderHome from '@/componets/SliderHome'

export default ({
  components: {
    // SliderHome
  }
})
</script>


<style scoped>
.top {
  padding-top: 300px;
}
.tex {
  text-transform: uppercase;
  font-size: 30px;
}
</style>