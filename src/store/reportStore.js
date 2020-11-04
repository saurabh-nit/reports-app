import { jsonReport } from "../utilities/constants";

export default {
  state: {
    reportData: []
  },
  getters: {
    getReportData(state) {
      return state.reportData;
    }
  },
  mutations: {
    setReportData(state, value) {
      state.reportData = value;
    }
  },
  actions: {
    GET_ALL_REPORTS({ commit }) {
      commit("setReportData", jsonReport.records);
    }
  },
  namespaced: true
};
