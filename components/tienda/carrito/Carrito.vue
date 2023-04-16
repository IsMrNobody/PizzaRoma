<template>
  <v-row justify="end">
    <v-dialog
      v-model="dialogo"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template #activator="{ on, attrs }">
        <v-badge
          :content="itemCount"
          :value="itemCount"
          color="green"
          overlap
          class="mr-8"
        >
          <v-icon 
            v-bind="attrs"
            @click="seeCar()"
            v-on="on"
          >mdi-cart
          </v-icon>
        </v-badge>
      </template>
      <v-card color="tercero">
        <v-toolbar
            dark
            color="orange"
        >
            <v-btn
              icon
              dark
              @click="close()"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-container>
          <v-row>
            <v-col>
              <v-btn v-show="verForm" text large light color="primary" @click="seeCar()">
                <v-icon>mdi-arrow-left</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <FormOrder v-if="verForm" :total="total" />
          <v-card
            v-if="verCarro"
            class="overflow-auto"
            color="black"
            outlined
            flat
          >
            <v-col>
              <v-row v-for="(car, i) in carrito" :key="i">
                <v-col sm="3" cols>
                  <v-card width="auto" height="90" elevation="10">
                    <v-img height="100%" :src="car.img.url"></v-img>
                  </v-card>
                </v-col>
                <v-col class="my-auto" sm="3" cols>
                  <p class="grey--text">{{ car.name }}
                    <span>/ {{ car.selectedPortion.title }}</span>
                  </p>
                </v-col>
                <v-col class="my-auto" sm="3" cols="6">
                  <v-row justify="space-around">
                    <v-btn @click="restar(i)">
                      -
                    </v-btn>
                    <p class="pa-2 text-center">{{ car.cantidad }}</p>
                    <v-btn @click="sumar(i)">
                      +
                    </v-btn>
                  </v-row>
                </v-col>
                <v-spacer></v-spacer>
                <v-col class="my-auto text-center">
                  <p class="text-h6">$ {{ car.totalProducto || car.price }}</p>
                </v-col>
              </v-row>
            </v-col>
          </v-card>
          <v-divider v-show="verCarro" class="mt-5 mb-5"></v-divider>
          <ConfirmPayment v-if="verConfirm" :total="total" />
          <v-row v-show="verCarro" class="ma-4">
            <div class="my-auto">
              <h2 class="text-title-1">Total:</h2>
            </div>
            <!-- <v-spacer></v-spacer> -->
            <v-col align="end">
              <h2>$ {{ total }}</h2>
            </v-col>
            <!-- <v-spacer></v-spacer> -->
            <v-col sm="2" align="end">
              <v-btn outlined large light color="primary" @click="seeForm()">
              Comprar
              </v-btn>
            </v-col>
          </v-row>
          <v-divider v-show="verCarro" class="mt-5 mb-5"></v-divider>
        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  import FormOrder from '@/components/tienda/carrito/FormOrder'
  import ConfirmPayment from '@/components/tienda/carrito/ConfirmPayment'
  export default {
    components: {
      FormOrder,
      ConfirmPayment
    },
    // props: {
    //   producto: {
    //    type: Object,
    //    default: () => {}
    //   }
    // },
    data () {
      return {}
    },
    computed: {
      carrito() {
        return this.$store.state.carrito.items
      },
      itemCount() {
        return this.carrito.length
      },
      total() {
        let total = 0
        this.carrito.forEach((item) => {
          total = total + item.totalProducto
        })
        return total.toFixed(2)
      },
      dialogo() {
        return this.$store.state.carrito.dialogo
      },
      verConfirm() {
        return this.$store.state.carrito.verConfirm
      },
      verForm() {
        return this.$store.state.carrito.verForm
      },
      verCarro() {
        return this.$store.state.carrito.verCarro
      }
    },
    methods: {
      sumar(i) {
        this.$store.dispatch('carrito/setCart', i)
      },
      restar(i) {
        this.$store.dispatch('carrito/delCart', i)
      },
      seeForm() {
        if (this.carrito.length >= 1) {
          this.$store.commit('carrito/verForm')
          this.$store.commit('carrito/setTotal', this.total)
        } else {
          alert('agrega algo al carrito')
        }
      },
      seeCar() {
        this.$store.commit('carrito/verCarro')
        this.$store.commit('carrito/setDialog', true)
      },
      close() {
        this.$store.commit('carrito/setDialog', false)
      }    
    },
  }
</script>

<style scoped>
::-webkit-scrollbar {
  width: 10px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #0e0e0e;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
