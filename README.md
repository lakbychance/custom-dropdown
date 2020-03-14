# This project showcases a reusable Dropdown Component built from scatch using React.js.<br/>

## Features:-
* Doesn't depened on any css framework (like Bootstrap). Implemented using pure javascript.
* Enables the user to select single option from dropdown.
* Is Keyboard accessible i.e up and down arrow keys can be used to navigate through dropdown options.
* Includes few unit test cases covering keyboard accessibility as well.

## Usage
```
  <Dropdown
  selectedOption={selectedOption}
  getSelectedOption={updateSelectedOption}
  options={options}
  defaultText={defaultText}
  maxResults={12}
  heightOfOption={35}
  />
 ```
 * The **selectedOption** and each of the option in **options** list have a fixed format decided by **IDropdownOption** interface.
 * The **getSelectedOption** is a method which is used to retrieve the selected option value from the dropdown.
 * The **defaultText** is the placeholder value which will be shown while the dropdown is open.
 * The **maxResults** and **heightOfOption** are together used to decide the scrolling of dropdown options.
 
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />

### `npm test`

Launches the test runner in the interactive watch mode.<br />

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.


