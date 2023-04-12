<template>
  <v-app dark>
    <!-- <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      class="secondary"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-app-bar
      :clipped-left="clipped"
      fixed
      color="tercero"
      app
    >
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->
      <!-- <v-spacer /> -->
      <div class="logoBar ml-5">
        <!-- <v-img src="/logo.png"></v-img> -->
        <h1 class="primary--text">Pizza Top</h1>
      </div>
      <!-- <v-toolbar-title v-text="title" /> -->
      <v-spacer />
      <Carrito />
    </v-app-bar>
    <v-main class="tercero">
      <!-- <v-container fluid> -->
        <Nuxt />
      <!-- </v-container> -->
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
     <v-footer
        dark
        padless
      >
        <v-card
          class="flex"
          flat
          tile
        >
          <v-card-title class="cuarto">
            <strong class="subheading">Conecta con nosotros!</strong>

            <v-spacer></v-spacer>

            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4"
              dark
              icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-title>

          <v-card-text id="contacta" class="py-2 text-center">
            {{ new Date().getFullYear() }} — <strong>Pizza Top - Anaco</strong>
          </v-card-text>
        </v-card>
      </v-footer>
  </v-app>
</template>

<script>
import Carrito from '@/components/tienda/carrito/Carrito'
export default {
  components: {
    Carrito
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-cupcake',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-storefront',
          title: 'Store',
          to: '/store'
        }
      ],
      icons: [
        'mdi-facebook',
        'mdi-instagram',
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Magia Legal'
    }
  },
  methods: {
    contacto() {
      window.location.href = "#contacta";
    }
  },
}
</script>

<style scoped>
.logoBar {
  /* margin-top: 75px; */
  width: 180px;
}
.greenColor {
  background-color: #565D47;
}
.rosaColor {
  background-color: #EAAC9D;
}
.beihgColor {
  background-color: #EAAC9D;
}
.marronColor {
  background-color: #B49C73;
}
</style>
