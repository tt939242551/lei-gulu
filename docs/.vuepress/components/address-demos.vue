<template>
  <div>
    <g-address></g-address>
    <g-address :default-address.sync="address"></g-address>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Address from '../../../src/address/address'

  export default {
    components: {
      'g-address': Address
    },
    data () {
      return {
        content: `
       <g-address></g-address>
       <g-address :default-address.sync="address"></g-address>

        address:{   
        provinceValue: 110000,
        cityValue: 110100,
        districtValue: 110101,
         }
      `.replace(/\t+| +/g, '').trim(),
      address:{   
        provinceValue: 110000,
        cityValue: 110100,
        districtValue: 110101,
         }
      }
    }
  }
</script>