<template>
  <v-container>
    <Admin v-if="history" />
    <v-col v-else sm="4" cols class="mx-auto">
      <v-text-field        
        v-model="pass"
        label="Pass"
        outlined
        @keyup.enter="password"
      ></v-text-field>
    </v-col>
  </v-container>
</template>

<script>
import Admin from '@/components/admin/Admin'
export default {
  components: {
    Admin
  },
  layout: 'admin',
  data() {
    return {
      pass: '',
      history: false
    }
  },
  methods: {
    password() {
      if (this.pass === 'glever') {
        this.history = true
      } else {
        alert('Debes ingresar la contraseña correcta')
      }
    }
  }
}
</script>

<style>

</style>