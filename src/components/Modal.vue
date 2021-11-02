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
                v-if="!isShowAddressCta"
                class="button"
                @click="addAddress"
            >
                Submit
            </button>
            <button 
                v-if="isShowAddressCta"
                class="button"
                @click="showAddressToggle"
            >
                Show address
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
          isAddressActive: false,
      }
  },
  computed: {
    isShowAddressCta () {
        return this.postalCode === localStorage.getItem('address') ? true : false
    }
  },
  methods: {
      addAddress () {
          localStorage.removeItem('address')
          localStorage.setItem('address', this.postalCode)
          this.isAddressActive = !this.isAddressActive
      },
       showAddressToggle () {
          this.isAddressActive = !this.isAddressActive
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
