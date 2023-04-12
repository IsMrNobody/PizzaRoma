<template>
  <div>
    <v-col align="center">
      <h3>Historial de Pedidos {{ ordenes.length }}</h3>
      <v-btn text @click="getData()">Actualizar</v-btn>
    </v-col>
    <v-progress-circular
      v-if="!ordenes.length"
      :size="50"
      color="amber"
      indeterminate
    ></v-progress-circular>
    <v-expansion-panels v-else>
      <v-expansion-panel v-for="(item, i) in ordenes" :key="i" class="marron">
        <v-expansion-panel-header v-if="item.active">
          <h3
            :class="
              item.status === 'Pendiente' ? 'white--text' : 'accent--text'
            "
          >
            {{ item.status }}
            <v-icon
              v-if="item.status === 'Pendiente'"
              :color="item.paid ? 'yellow' : ''"
              >mdi-clock</v-icon
            >
            <v-icon v-if="item.status === 'Cancelado'" color="red"
              >mdi-close</v-icon
            >
            <v-icon v-if="item.status === 'Entregado'" color="green"
              >mdi-check</v-icon
            >
            <p>{{ item.createdAt }}</p>
          </h3>
          <!-- <v-spacer></v-spacer> -->
          <!-- {{ item.createdAt }} -->
        </v-expansion-panel-header>

        <v-expansion-panel-content>
          <v-row>
            <v-col>
              <v-card class="mt-5" max-width="800">
                <v-card-title class="subheading font-weight-bold">
                  {{ item.nameUser }}
                </v-card-title>
                <v-card-subtitle class="subheading font-weight-bold">
                  {{ item.email }}
                  <br />
                  ID: {{ item._id }}
                </v-card-subtitle>
                <v-card-actions class="subheading font-weight-bold">
                  <v-btn class="mr-3" small icon @click="copy(item.phone)">
                    <v-icon color="green"> mdi-whatsapp </v-icon>
                  </v-btn>
                  +{{ item.phone }}
                  <v-spacer></v-spacer>
                </v-card-actions>

                <v-divider></v-divider>

                <v-list dense class="secondary">
                  <v-list-item>
                    <v-list-item-content>Amount:</v-list-item-content>
                    <v-list-item-content class="text-h5 green--text align-end">
                      {{ item.total }}
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-content>Status Paid:</v-list-item-content>
                    <v-list-item-content class="display-1">
                      <div>
                        <v-icon v-if="item.paid" color="green"
                          >mdi-check</v-icon
                        >
                        <v-icon v-else>mdi-clock</v-icon>
                      </div>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-content>Payment Method:</v-list-item-content>
                    <v-list-item-content class="align-end">
                      {{ item.paymentMethod }}
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item v-if="item.numberRef">
                    <v-list-item-content>Number Ref:</v-list-item-content>
                    <v-list-item-content class="align-end">
                      {{ item.numberRef }}
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-content>C/Products:</v-list-item-content>
                    <v-list-item-content class="align-end">
                      {{ item.products.length }}
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-content>Delivery Date:</v-list-item-content>
                    <v-list-item-content class="align-end">
                      {{ item.deliveryDate }}
                    </v-list-item-content>
                  </v-list-item>

                  <!-- <v-list-item>
                        <div>
                          <v-btn small icon @click="copy(item.phone)">
                            <v-icon color="green">
                            mdi-whatsapp
                            </v-icon>
                          </v-btn>
                        </div>
                        <v-list-item-content class="align-end">
                            {{ item.phone }}
                        </v-list-item-content>
                        </v-list-item>            -->

                  <div v-if="item.floor">
                    <v-list-item>
                      <v-list-item-content>floor:</v-list-item-content>
                      <v-list-item-content class="align-end">
                        {{ item.floor }}
                      </v-list-item-content>
                    </v-list-item>
                  </div>

                  <div v-if="item.house">
                    <v-list-item>
                      <v-list-item-content>house:</v-list-item-content>
                      <v-list-item-content class="align-end">
                        {{ item.house }}
                      </v-list-item-content>
                    </v-list-item>
                  </div>

                  <div v-if="item.address">
                    <v-card-subtitle> Address: </v-card-subtitle>
                    <v-card-text class="beige--text">
                      {{ item.address }}
                    </v-card-text>
                  </div>

                  <div v-if="item.comments">
                    <v-card-subtitle> Comment: </v-card-subtitle>
                    <v-card-text class="beige--text">
                      {{ item.comments }}
                    </v-card-text>
                  </div>
                </v-list>
                <v-card-actions>
                  <v-btn 
                    color="red" 
                    text 
                    small
                    :disabled="item.status === 'Cancelado'"
                    @click="editOrder({status: 'Cancelado', paid: false, id: item._id})"
                  >
                    Cancelar
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn
                    :disabled="item.paid === true"
                    color="yellow"
                    outlined
                    small
                    @click="editOrder({status: 'Pendiente', paid: true, id: item._id})"
                  >
                    Pagado
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn
                    :disabled="item.status === 'Entregado'"
                    color="green"
                    outlined
                    small
                    @click="editOrder({status: 'Entregado', paid: true, id: item._id})"
                  >
                    Entregado
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col>
              <v-card max-height="420" class="overflow-auto secondary mt-5">
                <v-col v-for="(pro, k) in item.products" :key="k">
                  <v-col>
                    <p>
                      C/Product:
                      <span class="yellow--text">{{ pro.cantidad }}</span>
                    </p>
                    <p class="primary--text">{{ pro.name }}</p>
                    <p>Portion: {{ pro.selectedPortion[0].title }}</p>
                    <p>
                      Total : $
                      <span class="green--text">{{ pro.totalProduct }}</span>
                    </p>
                  </v-col>
                  <v-divider></v-divider>
                </v-col>
              </v-card>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    ordenes() {
      return this.$store.state.order.orders
    },
  },
  async created() {
    await this.$store.dispatch('setMerchant')
    this.$store.dispatch('order/getOrders')
  },
  methods: {
    copy(phone) {
      //   window.location.href = 'https://wa.me/584128352365'
      window.open(`https://wa.me/${phone}`)
    },
    getData() {
      this.$store.dispatch('order/getOrders')
    },
    editOrder(status) {
      this.$store.dispatch('order/editOrder', status)
    },
  },
}
</script>

<style>
</style>