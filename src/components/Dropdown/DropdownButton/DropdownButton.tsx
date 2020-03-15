import React, { useEffect, useCallback } from "react";
import { handleArrowForDropDownButton } from "../helper";
import styles from "./styles/DropdownButton.module.css";
import { DropdownButtonProps } from "../IDropdown";

export const DropdownButton: React.FC<DropdownButtonProps> = (
  props: DropdownButtonProps
) => {
  //props
  const { isOpen, toggleDropdown, shouldFlip, disabled, children } = props;

  //hooks
  const handleDropdown = useCallback(
    event => {
      if (isOpen && event.type === "keydown") {
        handleArrowForDropDownButton(event, shouldFlip);
      }
      if (event.type === "click") {
        const isDropdownButton = event.target.type === "submit";
        if (!isDropdownButton) toggleDropdown(false);
        else {
          toggleDropdown(!isOpen);
          event.stopPropagation();
        }
      }
      if (event.type === "blur") {
        toggleDropdown(false);
      }
    },
    [isOpen, shouldFlip, toggleDropdown]
  );

  useEffect(() => {
    window.addEventListener("click", handleDropdown);
    window.addEventListener("blur", handleDropdown);
    return () => {
      window.removeEventListener("click", handleDropdown);
      window.removeEventListener("blur", handleDropdown);
    };
  }, [handleDropdown]);

  //JSX
  return (
    <button
      onClick={e => handleDropdown(e)}
      onKeyDown={e => handleDropdown(e)}
      disabled={disabled}
      data-testid="dropdown-button"
      className={styles.dropdownButton}
    >
      {children}
      <div
        className={`${!isOpen ? styles.arrowDown : styles.arrowUp} ${
          disabled ? styles.arrowDisabled : styles.arrowEnabled
        }`}
      ></div>
    </button>
  );
};
