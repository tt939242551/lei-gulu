<template>
  <div class="address">
    <section><g-address></g-address></section>
    <g-address :default-address.sync="address"></g-address>
    <span >你选择的地址是:{{address.provinceName}}{{address.cityName}}{{address.districtName}}</span>
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
       你选择的地址是:{{address.provinceName}}{{address.cityName}}{{address.districtName}}

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
<style scoped>
.address > section{
margin: 70px 0 40px;
}
.address pre {
  margin-top: 70px;
}
.address span {
  line-height: 40px;
}

</style>