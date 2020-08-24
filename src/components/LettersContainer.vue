<template>
  <div class="LettersContainer">
    <button
      class="LetterBtn"
      v-for="letter in letters"
      :key="letter"
      @click="handleClickBtn(letter)"
    >
      {{ letter }}
    </button>
  </div>
</template>

<script>
const LETTERS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];
export default {
  name: "LettersContainer",
  data() {
    return {
      letters: LETTERS
    };
  },
  methods: {
    handleClickBtn(letter) {
      this.$emit("letterClicked", letter);
    }
  }
};
</script>
<style lang="scss" scoped>
.LettersContainer {
  .LetterBtn {
    background: rgba(white, 0.2);
    box-shadow: 1px 0px 4px 0px
      rgba(black, 0.1);
    color: #2b2b2b;
    border-radius: 24px;
    font-size: 13px;
    font-family: "Raleway";
    border: 0;
    padding: 5px 10px;
    margin-top: 20px;
    margin-right: 4px;
    cursor: pointer;
    transition: all 0.2s ease-in;
    outline: 0;

    &:hover {
      background: rgba(white, 0.4);
    }
  }
}
</style>
