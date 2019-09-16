import {
  CLOUD_COMPUTING_OVERVIEW,
  CIRCLE_CI_S3_CLOUDFRONT,
  KENESIS
} from "../../constants/cloudComputing";

export const dropdownOptions = [
  {
    key: CLOUD_COMPUTING_OVERVIEW,
    value: CLOUD_COMPUTING_OVERVIEW,
    text: "Overview"
  },
  {
    key: CIRCLE_CI_S3_CLOUDFRONT,
    value: CIRCLE_CI_S3_CLOUDFRONT,
    text: "Circle CI With S3 And Cloudfront"
  },
  {
    key: KENESIS,
    value: KENESIS,
    text: "AWS Kenesis"
  },
  {
    key: "More Coming Soon",
    value: CLOUD_COMPUTING_OVERVIEW,
    text: "More Coming Soon..."
  }
];
