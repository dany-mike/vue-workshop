<template>
    <div class="modal flex items-center justify-center">
        <div v-if="!isPostalCodeActive">
              <input 
            type="number" 
            class="postal-code" 
            placeholder="Your postal code"
            v-model="postalCode"
            >
             <button 
                class="button"
                @click="addPostalCode"
            >
                Submit
            </button>
        </div> 
        <APostalCode
            v-if="isPostalCodeActive"
            :postalCode="postalCode"
            @on-return="togglePostalCode"
        />
    </div>
</template>

<script>
import APostalCode from '../atoms/a-postal-code.vue'

export default {
  name: 'MModal',
  components: {
      APostalCode
  },
  data () {
      return {
          postalCode: null,
          isPostalCodeActive: false,
      }
  },
  methods: {
      addPostalCode () {
          localStorage.setItem('address', this.postalCode)
          this.isPostalCodeActive = !this.isPostalCodeActive
      },
       togglePostalCode () {
          this.isPostalCodeActive = !this.isPostalCodeActive
      }
  },
  mounted () {
      this.postalCode = localStorage.getItem('address')
  }
}
</script>

<style scoped>
    .modal {
        border: 1px solid black;
        height: 80vh;
    }

    .postal-code {
        margin: 0 0.5rem 0 0.5rem;
        width: 50%;
        height: 5%;
        padding: 0;
    }

    .flex {
        display: flex;
    }

    .button {
        height: 5%;
    }

    .items-center {
        align-items: center;
    }

    .justify-center {
        justify-content: center;
    }
</style>
