import { ReactFragment } from "react";

export interface DropdownProps {
  selectedOption: IDropdownOption;
  options: IDropdownOption[];
  getSelectedOption: (option: IDropdownOption) => void;
  defaultText: IDropdownOption;
  maxResults: number;
  heightOfOption: number;
  disabled?: boolean;
}

export interface IDropdownOption {
  value: string;
  content: ReactFragment;
}
