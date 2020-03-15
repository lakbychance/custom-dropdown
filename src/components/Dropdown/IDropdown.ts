import { ReactFragment } from "react";

export interface IDropdownOption {
  value: string;
  content: ReactFragment;
}

export interface DropdownProps {
  selectedOption: IDropdownOption;
  options: IDropdownOption[];
  getSelectedOption: (option: IDropdownOption) => void;
  defaultText: IDropdownOption;
  maxResults: number;
  heightOfOption: number;
  disabled?: boolean;
}

export interface DropdownOptionProps {
  option: IDropdownOption;
  getSelectedOption: (option: IDropdownOption) => void;
  selectedOption: IDropdownOption;
  toggleDropdown: (isOpen: boolean) => void;
}

export interface DropdownButtonProps {
  isOpen: boolean;
  toggleDropdown: (isOpen: boolean) => void;
  shouldFlip: boolean;
  children: ReactFragment;
  disabled?: boolean;
}
