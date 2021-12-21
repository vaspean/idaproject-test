<template>
  <header>
    <h1>Добавление товара</h1>
    <button class="select">
      По умолчанию
    </button>
  </header>
</template>

<script>
export default {
  name: 'Header',
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
  background-position: 87% 50%;
  box-shadow: $box-shadow-tiny;
  font-size: 12px;
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
