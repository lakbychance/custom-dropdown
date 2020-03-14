import { IDropdownOption } from "../IDropdown";

export interface DropdownOptionProps {
  option: IDropdownOption;
  getSelectedOption: (option: IDropdownOption) => void;
  selectedOption: IDropdownOption;
  toggleDropdown: (toggleState: boolean) => void;
}
