<template>
  <div class="home">
    <h4>Report for provided data</h4>
    <div>
      <Dropdown
        :value="activeMenuOption"
        :label="activeMenuOption"
        defaultLabel="Change performance metric"
        :listData="dropDownData"
        @onItemClick="menuItemSelected"
      />
    </div>
    <div class="report-container">
      <GChart
        type="LineChart"
        :data="currentChartData"
        :options="chartOptions"
      />
    </div>
  </div>
</template>
<script src="./js/home.js"></script>
<style lang="scss">
@import "@/scss/index.scss";
.report-container {
  border: 1px solid $color-grey-dark1;
  color: $color-grey-dark2;
}
</style>
