import faker from "faker";
import React from "react";
import { IDropdownOption } from "./components/Dropdown/IDropdown";
import styles from "./App.module.css";
const options: Array<IDropdownOption> = [];
for (let i = 0; i < 20; i++) {
  const value = faker.random.alphaNumeric(8);
  options.push({
    value: value,
    content: (
      <div className={styles.option}>
        <span className={styles.optionValue}>{value}</span>
      </div>
    )
  });
}
export default options;
