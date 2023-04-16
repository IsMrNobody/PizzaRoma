<template>
  <v-sheet
    class="mx-auto transparent"
    max-width="1200"
  >
    <v-slide-group
      v-model="model"
      class="ma-2"
    >
      <v-slide-item
        v-for="(n, i) in photos"
        :key="i"
      >
        <v-card
          class="mx-auto pa-2 ml-5 mr-5 transparent"
          flat
          height="auto"
          max-width="350"
        >
          <v-img height="auto" :src="n.img"></v-img>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
  export default {
    data: () => ({
      model: null,
      photos: [
        {
          img: "https://res.cloudinary.com/dku13l2ep/image/upload/v1681314072/JARTATE/Ciudad/Anaco/pizza%20roma/redes/Capa_1_lyawwa.png"
        },
        {
          img: "https://res.cloudinary.com/dku13l2ep/image/upload/v1681314073/JARTATE/Ciudad/Anaco/pizza%20roma/redes/Capa_6_yfaz8p.png"
        },
        {
          img: "https://res.cloudinary.com/dku13l2ep/image/upload/v1681314071/JARTATE/Ciudad/Anaco/pizza%20roma/redes/Capa_5_a1pi3e.png"
        },
        {
          img: "https://res.cloudinary.com/dku13l2ep/image/upload/v1681314073/JARTATE/Ciudad/Anaco/pizza%20roma/redes/Capa_4_tu0ogd.png"
        },
        {
          img: "https://res.cloudinary.com/dku13l2ep/image/upload/v1681314068/JARTATE/Ciudad/Anaco/pizza%20roma/redes/Capa_2_jgudam.png"
        }
      ]
    }),
  }
</script>

