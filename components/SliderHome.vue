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
          max-width="400"
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
          img: "https://res.cloudinary.com/dku13l2ep/image/upload/v1674829562/Pizza%20Top/Recursos/instagram/Screenshot_4_bzanom.png"
        },
        {
          img: "https://res.cloudinary.com/dku13l2ep/image/upload/v1674829562/Pizza%20Top/Recursos/instagram/Screenshot_2_f6q835.png"
        },
        {
          img: "https://res.cloudinary.com/dku13l2ep/image/upload/v1674829562/Pizza%20Top/Recursos/instagram/Screenshot_6_v77h7h.png"
        },
        {
          img: "https://res.cloudinary.com/dku13l2ep/image/upload/v1674829562/Pizza%20Top/Recursos/instagram/Screenshot_5_tu8mio.png"
        },
        {
          img: "https://res.cloudinary.com/dku13l2ep/image/upload/v1674829562/Pizza%20Top/Recursos/instagram/Screenshot_3_p4ta5y.png"
        },
        {
          img: "https://res.cloudinary.com/dku13l2ep/image/upload/v1674829562/Pizza%20Top/Recursos/instagram/Screenshot_1_t11i8m.png"
        }
      ]
    }),
  }
</script>

