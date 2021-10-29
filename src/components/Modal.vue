<template>
    <div class="modal flex items-center justify-center">
        <input 
            type="number" 
            class="postal-code" 
            placeholder="Your postal code"
            v-model="postalCode"
        >
        {{ postalCode }}
        <button 
            class="button"
        >
            Submit
        </button>
    </div>
</template>

<script>
export default {
  name: 'Modal',
  data () {
      return {
          postalCode: null,
          setAddress: null
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
        width: 40%;
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
