<template>
  <div class="dropdown-wrapper">
    <div class="selected-box has-value" @click="toggleList">
      <label v-if="value">{{ defaultLabel }}</label>
      <span class="selected-box__label-text ellipsis">
        {{ label || defaultLabel }}
      </span>
      <div :class="{ open: listOpen }" class="icon-dropdown">
        <img src="@/assets/icons/icon-arrow-down-blue.svg" alt="Caret Down" />
      </div>
    </div>

    <Transition effectName="slide-down">
      <div v-if="listOpen" class="list-items no-scrollbar">
        <div
          class="item"
          v-for="item in listData"
          :key="item.value"
          :class="{ selected: item.value === value }"
          @click="selectThisItem(item)"
        >
          <span>{{ item.name }}</span>
        </div>
      </div>
    </Transition>
  </div>
</template>
<script src="./js/dropdown.js"></script>
<style lang="scss" scoped>
@import "@/scss/index.scss";

.dropdown-wrapper {
  width: 100%;
  position: relative;
  text-align: left;
  margin-bottom: 16px;
  max-width: 250px;

  .selected-box {
    min-height: 45px;
    background-color: $color-grey-light;
    line-height: 45px;
    border-radius: $border-radius-8;
    padding: 0 10px 0 16px;
    position: relative;
    cursor: pointer;
    user-select: none;

    label {
      color: $color-grey-dark4;
      font-size: 16px;
      position: absolute;
      transform-origin: top left;
      transform: translate(0, 16px) scale(1);
      transition: all 0.1s ease-in-out; //speed
    }

    /** active label */
    &.has-value {
      label {
        //move the x coordinate and reduce size
        transform: translate(0, -6px) scale(0.65);
      }
    }

    &__label-text {
      width: 90%;
      display: block;
      color: $color-grey-dark4;
      position: absolute;
      padding-top: 3px;
      font-weight: 600;
    }

    img {
      width: 30px;
      height: 30px;
      right: 10px;
      position: absolute;
      top: 8px;
    }

    .icon-dropdown {
      img {
        transform: rotate(0deg);
        transition: all 400ms ease;
      }

      &.open {
        img {
          transform: rotate(180deg);
          transition: all 400ms ease;
        }
      }
    }
  }

  .list-items {
    background-color: #ffffff;
    margin: 5px 0;
    z-index: 2;
    box-shadow: 0 3px 10px 0 rgba(34, 36, 38, 0.15);
    color: $color-grey-dark3;
    user-select: none;
    position: absolute;
    width: calc(100% - 1px);
    max-height: 180px;
    overflow-y: scroll;
    border-radius: $border-radius-8;

    .item {
      padding: 12px 14px;
      font-size: 15px;
      border-bottom: 1px solid $color-grey;

      &.selected {
        background-color: #008000;
        color: white;
      }
    }
  }
}
</style>
