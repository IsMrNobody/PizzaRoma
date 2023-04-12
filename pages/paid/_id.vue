<template>
  <div>
    <v-col class="text-center marron">
      Thank you for your purchase! Your order is being processed
    </v-col>
    <OrderForm /> 
  </div>
</template>

<script>
import OrderForm from '@/components/paid/OrderForm'
export default {
  components: {
    OrderForm
  },
  layout: 'paid',
  computed: {
    param() {
      return this.$route.params.id
    }
  }
}
</script>

<style>

</style>