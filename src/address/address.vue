
<template>
  <div class="block-item">
    <label>选择地区:</label>
    <div class="select-group">
      <select class="js-province-selector" v-model="provinceValue">
        <option value="-1">选择省份</option>
        <option :value="p.value" v-for="p in addressData.list" :key="p.value">{{p.label}}</option>
      </select>
      <select class="js-city-selector" v-model="cityValue">
        <option value="-1">选择城市</option>
        <option :value="c.value" v-for="c in cityList" :key="c.value">{{c.label}}</option>
      </select>
      <select class="js-county-selector" name="area_code" v-model="districtValue">
        <option value="-1">选择地区</option>
        <option :value="d.value" v-for="d in districtList" :key="d.value">{{d.label}}</option>
      </select>
      <g-button @click="add">提交</g-button>
    </div>
  </div>
</template>

<script>
import addressData from "./address.json";
import Button from '../button'

export default {
  data() {
    return {
      cityValue: -1,
      districtValue: -1,
      provinceValue: -1,
      addressData,
      cityList: null,
      districtList: null,
      provinceName: "",
      cityName: "",
      districtName: "",
      isInitVal: false
    };
  },
  components: {
    "g-button": Button
  },
  props: {
    defaultAddress: {
      type: Object
    }
  },
  methods: {
    add() {
      let { provinceValue, cityValue, districtValue, provinceName, cityName, districtName} = this;
      let data = { provinceValue, cityValue, districtValue, provinceName, cityName, districtName };
      this.$emit("update:default-address", data);
    }
   },
  created() {
    if (this.defaultAddress) {
      this.provinceValue = this.defaultAddress.provinceValue;
      this.isInitVal = true;
    }
  },
  watch: {
    provinceValue(val) {
      if (val === -1) return;
      let index = this.addressData.list.findIndex(item => {
        return item.value === val;
      });
      this.provinceName = this.addressData.list[index].label;
      this.cityList = this.addressData.list[index].children;
      this.cityValue = -1;
      this.districtValue = -1;
      if (this.defaultAddress && this.isInitVal) {
        this.cityValue = parseInt(this.defaultAddress.cityValue);
      }
    },
    cityValue(val) {
      if (val === -1) return;
      let index = this.cityList.findIndex(item => {
        return item.value === val;
      });
      this.cityName = this.cityList[index].label;
      this.districtList = this.cityList[index].children;
      this.districtValue = -1;
      if (this.defaultAddress && this.isInitVal) {
        this.districtValue = parseInt(this.defaultAddress.districtValue);
        this.isInitVal = false;
      }
    },
    districtValue(val) {
      if (val === -1) return;
      let index = this.districtList.findIndex(item => {
        return item.value === val;
      });
      this.districtName = this.districtList[index].label;
    }
  }
};
</script>

<style scoped>

.block-item {
  display: table;
  width: 100%;
  padding: 0
}

.block-item label {
  display: table-cell;
  width: 80px;
  padding: 5px 0;
}
 .block-item select {
  display: table-cell;
  padding: 6px 0 9px 5px;
  margin-right: 16px;
  font-size: 14px
}
 .block-item select {
  background-color: #fff;
  outline: none
}
.block-item label,
.block-item input {
  vertical-align: middle
}

.select-group select {
  display: inline-block;
  width: 100px;
  font-size: 13px;
  border-radius: 4px;
  border: 1px solid #999;
}
.select-group select:hover{
  border-color: #666;
}
.select-group button {
  font-size: 12px;
}

</style>

