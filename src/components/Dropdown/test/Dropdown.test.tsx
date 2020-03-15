import React from "react";
import options from "../../../data";
import { DropdownProps, IDropdownOption } from "../IDropdown";
import { Dropdown } from "../Dropdown";
import { render, waitForElement, fireEvent } from "@testing-library/react";
const dropdownProps: DropdownProps = {
  options: options,
  getSelectedOption: (option: IDropdownOption) => console.log(option),
  maxResults: 10,
  heightOfOption: 35,
  selectedOption: options[0],
  defaultText: {
    value: "Please Select",
    content: (
      <span>
        <div>Please Select</div>
      </span>
    )
  }
};
describe("Dropdown Success", () => {
  const log = jest.spyOn(global.console, "log");
  it("Dropdown is closed", async () => {
    const { getByTestId } = render(<Dropdown {...dropdownProps} />);
    const dropdownButton = await waitForElement(() =>
      getByTestId("dropdown-button")
    );
    expect(dropdownButton).toHaveTextContent(options[0].value);
  });
  it("Dropdown is open", async () => {
    const { container, getByTestId } = render(<Dropdown {...dropdownProps} />);
    const dropdownButton = await waitForElement(() =>
      getByTestId("dropdown-button")
    );
    const buttonClicked = fireEvent.click(dropdownButton);
    expect(buttonClicked).toBe(true);
    const dropdownOption = container.querySelector(".dropdownOption");
    expect(dropdownButton).toHaveTextContent("Please Select");
    expect(dropdownOption).toHaveTextContent(options[0].value);
  });
  it("Dropdown is open and user navigates through it", async () => {
    const { container, getByTestId } = render(<Dropdown {...dropdownProps} />);
    const dropdownButton = await waitForElement(() =>
      getByTestId("dropdown-button")
    );
    const keyDown = fireEvent.keyDown(dropdownButton, {
      keyCode: 13
    });
    expect(keyDown).toBe(true);
    fireEvent.keyDown(dropdownButton, { keyCode: 40 });
    const dropdownOptions = container.querySelectorAll(".dropdownOption");
    fireEvent.keyDown(dropdownOptions[0], { keyCode: 40 });
    fireEvent.click(dropdownOptions[1], { keyCode: 13 });
    expect(log).toHaveBeenCalledWith(options[1]);
    fireEvent.keyDown(dropdownOptions[1], { keyCode: 38 });
    fireEvent.click(dropdownOptions[0], { keyCode: 13 });
    expect(log).toHaveBeenCalledWith(options[0]);
  });
  it("Dropdown is open and user clicks or focuses out of dropdown", async () => {
    const { getByTestId } = render(<Dropdown {...dropdownProps} />);
    const dropdownButton = await waitForElement(() =>
      getByTestId("dropdown-button")
    );
    fireEvent.click(dropdownButton);
    fireEvent.click(window);
    expect(dropdownButton).toHaveTextContent(options[0].value);
    fireEvent.click(dropdownButton);
    fireEvent.blur(window);
    expect(dropdownButton).toHaveTextContent(options[0].value);
  });
});
