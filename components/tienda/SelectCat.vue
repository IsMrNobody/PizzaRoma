<template>
  <v-row justify="space-around">
    <v-col cols="12" sm="10" md="8">
      <v-sheet class="py-4 px-1 transparent">
        <v-chip-group
          mandatory
          active-class="beige--text"
          light
        >
          <v-chip
            v-for="tag in category"
            :key="tag"
            class="mx-auto ml-1"
            color="marron"
            @click="setCat(tag)"
          >
            {{ tag }}
          </v-chip>
        </v-chip-group>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({}),
  computed: {
    category() {
      return this.$store.state.products.categories
    },
  },
  methods: {
    setCat(id) {
      this.$store.commit('products/filterCat', id)
    }
  }
}
</script>
