import React, { useState } from "react";
import styles from "./App.module.css";
import { Dropdown } from "./components/Dropdown/Dropdown";
import options from "./data";
import { IDropdownOption } from "./components/Dropdown/IDropdown";
function App() {
  const [selectedOption, setSelectedOption] = useState({
    value: options[0].value,
    content: options[0].content
  });
  const updateSelectedOption = (option: IDropdownOption) => {
    setSelectedOption(option);
  };
  const defaultText = {
    value: "Please Select",
    content: (
      <div className={styles.defaultText}>
        <span>Please Select</span>
      </div>
    )
  };
  return (
    <div className={styles.app}>
      <h1>Custom Dropdown</h1>
      <div className={styles.dropdownWrapper}>
        <Dropdown
          selectedOption={selectedOption}
          getSelectedOption={updateSelectedOption}
          options={options}
          defaultText={defaultText}
          maxResults={12}
          heightOfOption={35}
        />
      </div>
    </div>
  );
}

export default App;
