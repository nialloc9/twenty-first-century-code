import {
  MACHINE_LEARING_OVERVIEW,
  STOCK_PREDICTOR,
  CANCER_CLASSIFIER
} from "../../constants/machineLearning";

export const dropdownOptions = [
  {
    key: MACHINE_LEARING_OVERVIEW,
    value: MACHINE_LEARING_OVERVIEW,
    text: "Overview"
  },
  { key: STOCK_PREDICTOR, value: STOCK_PREDICTOR, text: "Stock Predictor" },
  {
    key: CANCER_CLASSIFIER,
    value: CANCER_CLASSIFIER,
    text: "Cancer Classifer With K Nearest Neighbours"
  }
];
