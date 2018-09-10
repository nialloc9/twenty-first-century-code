import {
  JAVA_CALCULATOR,
  JAVA_GAME,
  JAVA_INSTANT_MESSENGER,
  JAVA_OVERVIEW,
  BREATH_FIRST_ALGORITHM
} from "../../constants/java";

export const dropdownOptions = [
  { key: JAVA_OVERVIEW, value: JAVA_OVERVIEW, text: "Overview" },
  {
    key: BREATH_FIRST_ALGORITHM,
    value: BREATH_FIRST_ALGORITHM,
    text: "Breath First Algorithm"
  },
  { key: JAVA_CALCULATOR, value: JAVA_CALCULATOR, text: "Calculator" },
  { key: JAVA_GAME, value: JAVA_GAME, text: "Find The Door Game" },
  {
    key: JAVA_INSTANT_MESSENGER,
    value: JAVA_INSTANT_MESSENGER,
    text: "Instant Messenger"
  }
];
