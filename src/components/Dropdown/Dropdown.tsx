import React, { useState, CSSProperties, useCallback } from "react";
import styles from "./styles/Dropdown.module.css";
import { DropdownProps, IDropdownOption } from "./IDropdown";
import { DropdownOption } from "./DropdownOption/DropdownOption";
import { handleFlip } from "./helper";
import { DropdownButton } from "./DropdownButton/DropdownButton";

export const Dropdown: React.FC<DropdownProps> = (props: DropdownProps) => {
  //props
  const {
    options,
    selectedOption,
    getSelectedOption,
    defaultText,
    maxResults,
    heightOfOption,
    disabled
  } = props;

  //state hooks
  const [isOpen, toggleDropdown] = useState(false);
  const [shouldFlip, toggleFlip] = useState(false);

  //other hooks
  const handleDropdownFlip = useCallback(
    element => {
      const flip = handleFlip(element, shouldFlip, maxResults * heightOfOption);
      const flipState = flip !== undefined ? flip : shouldFlip;
      toggleFlip(flipState);
    },
    [shouldFlip, maxResults, heightOfOption]
  );

  //variable assignments
  const maxHeight = maxResults * heightOfOption;
  const dropdownStatus = isOpen ? styles.open : styles.hide;
  const isMoreThanMax = options.length > maxResults;
  const scrollStyle: CSSProperties = isMoreThanMax
    ? { maxHeight: `${maxHeight}px`, overflowY: "scroll" }
    : {};
  const flipStyle: CSSProperties = shouldFlip
    ? { bottom: "100%" }
    : { top: "100%" };

  //JSX
  return (
    <div ref={el => handleDropdownFlip(el)} className={styles.dropdown}>
      <DropdownButton
        toggleDropdown={toggleDropdown}
        shouldFlip={shouldFlip}
        isOpen={isOpen}
        disabled={disabled}
      >
        {!isOpen ? selectedOption.content : defaultText.content}
      </DropdownButton>

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
