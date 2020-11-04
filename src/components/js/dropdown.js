import Transition from "@/components/Transition";

export default {
  name: "Dropdown",
  props: {
    listData: {
      type: Array,
      default: []
    },
    label: {
      type: String,
      default: ""
    },
    defaultLabel: {
      type: String,
      default: ""
    },
    value: {
      type: [String, Number],
      default: ""
    }
  },
  data() {
    return {
      listOpen: false
    };
  },
  watch: {
    listOpen: function(newValue) {
      if (newValue) {
        setTimeout(() => {
          const element = this.$el.querySelector(".item.selected");
          if (!element) return false;
          element.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "nearest"
          });
        }, 200);
      }
    }
  },
  components: {
    Transition
  },
  methods: {
    toggleList() {
      this.listOpen = !this.listOpen;
    },
    selectThisItem(item) {
      this.$emit("onItemClick", item);
      this.hideDropdown();
    },
    hideDropdown() {
      this.listOpen = false;
    }
  }
};
