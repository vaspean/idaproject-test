<template>
  <header>
    <h1>Добавление товара</h1>
    <select v-model="filter" class="select">
      <option value="default">По умолчанию</option>
      <option value="min">По цене min</option>
      <option value="max">По цене max</option>
      <option value="name">По названию</option>
      По умолчанию
    </select>
  </header>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    filter: {
      get() {
        return this.$store.state.filter;
      },
      set(value) {
        this.$store.commit('changeFilter', value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  margin-bottom: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

h1 {
  margin: 0;
  font-size: 28px;
  font-weight: 600;
}

.select {
  @include border-default;
  height: 36px;
  color: $text-color-gray;
  padding: 0 28px 0 15px;
  background-image: url("../../assets/select_arrow.svg");
  background-repeat: no-repeat;
  background-position: 87% 57%;
  box-shadow: $box-shadow-tiny;
  font-size: 12px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
}

@media screen and (max-width: 570px) {
  header {
    flex-direction: column;

    .select {
      margin: 10px 0;
      background-position: 95% 53%;
    }
  }
}
</style>
