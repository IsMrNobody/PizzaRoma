<template>
  <div>
    <v-img class="banner" :src="merchant.banner">
      <v-card class="fix mx-auto" flat>
        <!-- <h1>The Taste of Your Celebrations</h1> -->
        <img width="70%" :src="merchant.logo" alt="">
        <v-col sm="12" cols="9" class="mx-auto">
          <p>Lunes a Domingo <br> de 11:00am a 11:00pm</p>
          <h2 class="beige--text spaci">Llegamos a la puerta de tu casa</h2>
        </v-col>
        <v-btn outlined color="primary" to="/" class="mt-5">Ver Menu</v-btn>
      </v-card>
    </v-img>
    <v-container>
      <div class="text-center pad">
        <v-card max-width="700" flat class="transparent mx-auto mb-5">
          <h2 class="siz">Comida Ràpida</h2>
          <h3>
            Selecciona lo que quieres comer hoy y disfruta de sabores que ofrecemos con tu comida favorita
          </h3>
        </v-card>
        <v-row justify="center">
          <v-col v-for="(card, i) in cards" :key="i" sm="4" cols>
            <CardsHome :cards="card" />
          </v-col>
        </v-row>
      </div>
    </v-container>
      <ParallaxHome class="parallax" />
    <v-container fluid>
      <div>
        <BannerHome class="mb-12" />
      </div>
      <v-row justify="center" class="contacto">
        <v-col class="my-auto" sm="4" cols>
          <v-img
            width="300"
            class="mx-auto moto"
            src="https://res.cloudinary.com/dku13l2ep/image/upload/v1674829503/Pizza%20Top/Recursos/moto_trxig6.png">
          </v-img>
        </v-col>
        <Contact />
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: 'Pizza',
          subtitle: 'Tenemos las mejores combinaciones de sabores con tus bebidas favoritas',
          icono: '',
          img: 'https://imagenes.20minutos.es/files/og_thumbnail/uploads/imagenes/2022/10/20/pizza.jpeg'
        },
        {
          title: 'Pollo',
          subtitle: 'Pollo frito con papas y tus bebidas favoritas',
          icono: '',
          img: 'https://unareceta.com/wp-content/uploads/2017/01/pollo-frito.jpg'
        },
        {
          title: 'Pasticho',
          subtitle: 'Delicioso pastichos relleno de carne y salsa de tomate',
          icono: '',
          img: 'https://www.comedera.com/wp-content/uploads/2022/04/pasticho-venezolano.jpg'
        }
      ]
    }
  },
  computed: {
    merchant() {
      return this.$store.state.merchant
    }
  },
  created() {
    this.$store.dispatch('setMerchant')
    // this.$store.dispatch('setProducts')
  }
}
</script>

<style scoped>
.fix {
  height: 100%;
  text-align: center;
  max-width: 500px;
  text-transform: uppercase;
}
.fix {
  /* content: ''; */
  backdrop-filter: blur(20px);
  background-color: rgba(0, 0, 0, 0.419);
}
.pad {
  padding-top: 40px;
  padding-bottom: 120px;
}
.parallax {
  padding-top: 80px;
  padding-bottom: 120px;
}
.contacto {
  padding-bottom: 80px;
  margin-top: 180px;
  background: rgb(255,0,0);
background: linear-gradient(180deg, rgba(255,0,0,1) 0%, rgba(210,21,0,1) 20%, rgba(0,0,0,1) 70%);
}
h1 {
  font-size: 4rem;
}
p {
  size: 18px;
}
.banner {
  height: 60vh;
  width: 100vw;
}
.siz {
  font-size: 35px;
  text-transform: uppercase;
}
</style>