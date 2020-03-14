import React, { useState, useEffect, CSSProperties } from "react";
import styles from "./styles/Dropdown.module.css";
import { DropdownProps, IDropdownOption } from "./IDropdown";
import { DropdownOption } from "./DropdownOption/DropdownOption";
import { handleArrowForDropDownButton, handleFlip } from "./helper";
export const Dropdown = (props: DropdownProps) => {
  const {
    options,
    selectedOption,
    getSelectedOption,
    defaultText,
    maxResults,
    heightOfOption,
    disabled
  } = props;

  //react state
  const [isOpen, toggleDropdown] = useState(false);
  const [shouldFlip, toggleFlip] = useState(false);

  //react-hooks
  useEffect(() => {
    window.addEventListener("click", () => toggleDropdown(false));
  });

  //event handlers
  const handleDropdown = (event: any) => {
    if (event.type === "keydown") {
      handleArrowForDropDownButton(event);
    }
    if (event.type === "click") {
      toggleDropdown(!isOpen);
      event.stopPropagation();
    }
  };
  const handleDropdownFlip = (element: any) => {
    const flip = handleFlip(element, shouldFlip, maxHeight);
    const flipState = flip !== undefined ? flip : shouldFlip;
    toggleFlip(flipState);
  };

  //conditionals
  const dropdownStatus = isOpen ? styles.open : styles.hide;
  const isMoreThanMax = options.length > maxResults;
  const maxHeight = maxResults * heightOfOption;
  const scrollStyle: CSSProperties = isMoreThanMax
    ? { maxHeight: `${maxHeight}px`, overflowY: "scroll" }
    : {};
  const flipStyle: CSSProperties = shouldFlip
    ? { bottom: "100%" }
    : { top: "100%" };

  //JSX
  return (
    <div ref={el => handleDropdownFlip(el)} className={styles.dropdown}>
      <button
        onClick={e => handleDropdown(e)}
        onKeyDown={e => handleDropdown(e)}
        disabled={disabled}
        data-testid="dropdown-button"
      >
        {!isOpen ? selectedOption.content : defaultText.content}
        <div
          className={`${!isOpen ? styles.arrowDown : styles.arrowUp} ${
            disabled ? styles.arrowDisabled : styles.arrowEnabled
          }`}
        ></div>
      </button>
      <div
        style={{ ...scrollStyle, ...flipStyle }}
        className={`${styles.dropdownContent} ${dropdownStatus}`}
        data-testid="dropdown-content"
      >
        {options.map((option: IDropdownOption) => (
          <DropdownOption
            key={option.value}
            option={option}
            selectedOption={selectedOption}
            toggleDropdown={toggleDropdown}
            getSelectedOption={getSelectedOption}
          />
        ))}
      </div>
    </div>
  );
};
