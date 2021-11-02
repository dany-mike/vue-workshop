<template>
    <div class="modal flex items-center justify-center">
        <div v-if="!isAddressActive">
              <input 
            type="number" 
            class="postal-code" 
            placeholder="Your postal code"
            v-model="postalCode"
            >
            {{ postalCode }}
            <button 
                class="button"
                @click="showAddressToggle"
            >
                Submit
            </button>
        </div> 
        <Address
            v-if="isAddressActive"
            :postalCode="postalCode"
            @on-return="showAddressToggle"
        />
    </div>
</template>

<script>
import Address from '../components/Address.vue'

export default {
  name: 'Modal',
  components: {
      Address
  },
  data () {
      return {
          postalCode: null,
          isAddressActive: false
      }
  },
  methods: {
      showAddressToggle () {
          this.isAddressActive = !this.isAddressActive
      }
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
