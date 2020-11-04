import { mapGetters } from "vuex";
import { GChart } from "vue-google-charts";
import Dropdown from "@/components/Dropdown";

export default {
  name: "Home",
  components: {
    GChart,
    Dropdown
  },
  data() {
    return {
      activeMenuOption: "sales",
      availableOptions: ["clickThruRate", "sales", "pageViews", "orders"],
      chartOptions: {
        legend: {
          position: "top",
          textStyle: { color: "grey", fontSize: 16 }
        },
        height: 350,
        pointSize: 3
      }
    };
  },
  computed: {
    ...mapGetters("reportStore", ["getReportData"]),
    currentChartData() {
      let chartData = [];
      chartData.push(["Date", this.activeMenuOption]);
      this.getReportData.forEach(item => {
        if (item[this.activeMenuOption]) {
          chartData.push([item.date, item[this.activeMenuOption]]);
        }
      });
      return chartData;
    },
    dropDownData() {
      return this.availableOptions.map(el => {
        return { name: el, value: el };
      });
    }
  },
  created() {
    this.$store.dispatch("reportStore/GET_ALL_REPORTS");
  },
  methods: {
    menuItemSelected(menu) {
      this.activeMenuOption = menu.value;
    }
  }
};
