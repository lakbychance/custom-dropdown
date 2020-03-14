import { DropdownOptionProps } from "./IDropdownOption";
import { IDropdownOption } from "../IDropdown";
import React from "react";
import { handleArrowKeys } from "../helper";
import styles from "./styles/DropdownOption.module.css";
export const DropdownOption = (props: DropdownOptionProps) => {
  //props
  const { option, getSelectedOption, toggleDropdown, selectedOption } = props;

  //event handlers
  const handleKeyEvents = (event: any, option: IDropdownOption) => {
    const isArrowKeyEvent = event.keyCode === 40 || event.keyCode === 38;
    const isEnterEvent = event.keyCode === 13;
    let toggleState: boolean;
    if (isArrowKeyEvent) {
      toggleState = handleArrowKeys(event);
      event.preventDefault();
      if (!toggleState) toggleDropdown(toggleState);
    }
    if (isEnterEvent) {
      handleOption(event, option);
    }
  };

  const handleOption = (event: any, option: IDropdownOption) => {
    toggleDropdown(false);
    getSelectedOption(option);
  };

  //conditionals
  const isSelected = selectedOption.value === option.value;

  //JSX
  return (
    <button
      className={styles.dropdownOptionButton}
      onKeyDown={e => handleKeyEvents(e, option)}
    >
      <div
        className={`${isSelected ? styles.selected : styles.notSelected}`}
        onClick={e => handleOption(e, option)}
      >
        {option.content}
      </div>
    </button>
  );
};
