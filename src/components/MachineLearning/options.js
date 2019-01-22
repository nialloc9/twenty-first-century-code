import {
  MACHINE_LEARING_OVERVIEW,
  STOCK_PREDICTOR,
  CANCER_CLASSIFIER,
  COLOR_MATCHER,
  CANCER_SUPPORT_VECTOR_MACHINE,
  K_MEANS,
  MEAN_SHIFT
} from "../../constants/machineLearning";

export const dropdownOptions = [
  {
    key: MACHINE_LEARING_OVERVIEW,
    value: MACHINE_LEARING_OVERVIEW,
    text: "Overview"
  },
  {
    key: CANCER_SUPPORT_VECTOR_MACHINE,
    value: CANCER_SUPPORT_VECTOR_MACHINE,
    text: "Support Vector Machine Cancer Classifier"
  },
  {
    key: CANCER_CLASSIFIER,
    value: CANCER_CLASSIFIER,
    text: "Cancer Classifer With K Nearest Neighbours"
  },
  { key: STOCK_PREDICTOR, value: STOCK_PREDICTOR, text: "Stock Predictor" },
  {
    key: COLOR_MATCHER,
    value: COLOR_MATCHER,
    text: "Client Side Color Matcher Neural Network"
  },
  {
    key: K_MEANS,
    value: K_MEANS,
    text: "K Means Clustering"
  },
  {
    key: MEAN_SHIFT,
    value: MEAN_SHIFT,
    text: "Mean Shift Clustering"
  }
];
