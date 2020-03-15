import { DropdownOptionProps } from "../IDropdown";
import { IDropdownOption } from "../IDropdown";
import React, { useCallback } from "react";
import { handleArrowKeys } from "../helper";
import styles from "./styles/DropdownOption.module.css";

export const DropdownOption: React.FC<DropdownOptionProps> = (
  props: DropdownOptionProps
) => {
  //props
  const { option, getSelectedOption, toggleDropdown, selectedOption } = props;

  //hooks
  const handleKeyEvents = useCallback((event: any) => {
    const isArrowKeyEvent = event.keyCode === 40 || event.keyCode === 38;
    if (isArrowKeyEvent) {
      handleArrowKeys(event);
      event.preventDefault();
    }
  }, []);
  const handleOption = useCallback(
    (event: any, option: IDropdownOption) => {
      toggleDropdown(false);
      getSelectedOption(option);
      event.preventDefault();
      event.stopPropagation();
    },
    [getSelectedOption, toggleDropdown]
  );

  //variable assignments
  const isSelected = selectedOption.value === option.value;

  //JSX
  return (
    <a
      role="button"
      href="#"
      tabIndex={0}
      className={styles.dropdownOption}
      onKeyDown={e => handleKeyEvents(e)}
      onClick={e => handleOption(e, option)}
    >
      <div
        className={`${isSelected ? styles.selected : styles.notSelected}`}
        onClick={e => handleOption(e, option)}
      >
        {option.content}
      </div>
    </a>
  );
};
