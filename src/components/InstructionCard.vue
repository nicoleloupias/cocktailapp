<template>
  <div class="InstructionCard">
    <h3>Need help? 🧐</h3>
    <p>Some examples you can search:</p>
    <ul>
      <li v-for="example in examples" :key="example">{{ example }}</li>
    </ul>
  </div>
</template>

<script>
import VueTypes from "vue-types";
export default {
  name: "InstructionCard",
  props: {
    examples: VueTypes.arrayOf(String)
  }
};
</script>
<style lang="scss" scoped>
.InstructionCard {
  background-color: rgba(#edc68b, 0.8);
  border-radius: 24px;
  padding: 20px;
  box-shadow: 1px 0px 4px 0px rgba(black, 0.1);
  font-size: 13px;
}
</style>
