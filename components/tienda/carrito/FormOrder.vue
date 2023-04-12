<template>
  <div>
    <v-row>
      <v-col sm="" cols>
        <v-card flat>
          <v-card-subtitle>
            Contact details
          </v-card-subtitle>
          <v-card-text>
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
              @submit.prevent="sendOrder()"
            >
              <v-text-field
                ref="name"
                v-model="name"
                :rules="nameRules"
                outlined
                placeholder="Your name"
                required
              ></v-text-field>
              <v-text-field
                ref="email"
                v-model="email"
                :rules="emailRules"
                outlined
                placeholder="Email"
                required
              ></v-text-field>
              <v-text-field
                ref="phone"
                v-model="phone"
                :rules="phoneRules"
                label="Add area code"
                type="Number"
                outlined
                placeholder="Phone"
                required
              ></v-text-field>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col sm="" cols>
        <v-card flat>
            <v-card-subtitle>
              Add address
            </v-card-subtitle>
            <v-card-text>
                <v-alert
                  outlined
                  color="primary"
                  text
                >
                  Delivery include
                </v-alert>
                <v-form>
                  <v-text-field
                    ref="address"
                    v-model="address"
                    outlined
                    label="Address Line"
                    placeholder="Direction"
                    required
                    class="mt-7"
                  ></v-text-field>
                  <v-row>
                    <v-col>
                      <v-text-field
                        ref="house"
                        v-model="house"
                        outlined
                        label="House"
                        placeholder="House"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col>
                      <v-text-field
                        ref="floor"
                        v-model="floor"
                        outlined
                        label="Floor"
                        placeholder="Floor"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-form>
            </v-card-text>
        </v-card>
      </v-col>
      <v-col sm="" cols>
        <v-card-subtitle>
          Payment Methods
        </v-card-subtitle>
        <PaymentCheck />
        <v-col class="mt-4">
          <DatePicker />
        </v-col>
        <v-card class="ma-2 mt-5" flat>
          <v-textarea
            v-model="comment"
            outlined
            auto-grow
            label="Comment"
            rows="4"
            row-height="20"
            shaped
          ></v-textarea>
        </v-card>
      </v-col>
    </v-row>
    <v-divider class="mt-5 mb-5"></v-divider>
    <v-row class="ma-4">
      <div class="my-auto">
        <h2 class="text-title-1">Total:</h2>
      </div>
      <v-spacer></v-spacer>
      <v-col cols="4" align="end">
        <h2>$ {{ total }}</h2>
      </v-col>
      <v-col sm="2" align="end">
        <v-btn
          type="submit"
          outlined
          :loading="load"
          ripple
          :disabled="!valid"
          large
          light
          color="primary"
          @click="sendOrder()"
        >
        checkout
        </v-btn>
      </v-col>
    </v-row>
    <v-divider class="mt-5 mb-5"></v-divider>
  </div>
</template>

<script>
import PaymentCheck from '@/components/tienda/carrito/PaymentCheck'
import DatePicker from '@/components/tienda/carrito/DatePicker'
export default {
  components: {
    PaymentCheck,
    DatePicker
  },
  props: {
    total: {
      type: String,
      default: () => {}
    }
  },
  data() {
    return {
      comment: '',
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        // v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      phone: '',
      phoneRules: [
        v => !!v || 'Phone is required',
        // v => (v && v.length === 12) || 'Name must be less than 12 characters',
      ],
      address: '', 
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      house: '',
      floor: '',
      valid: false,
      load: false
    }
  },
  methods: {
    sendOrder() {
      this.load = true
      const data = {
       nameUser: this.name,
       phone: this.phone,
       email:  this.email,
       address: this.address,
       house: this.house,
       floor: this.floor,
       comments: this.comment,
      }
      if (data.email && data.phone && data.nameUser) {    
        this.$store.dispatch('carrito/sendOrder', data)
      } else {
        alert('Debes rellenar todos los campos')
        this.load = false
      }
    }
  }
}
</script>

<style>

</style>