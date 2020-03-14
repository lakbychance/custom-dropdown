export const handleArrowKeys = (event: any) => {
  if (event.keyCode === 40) {
    if (event.target.nextElementSibling)
      event.target.nextElementSibling.focus();
    else return false;
  }
  if (event.keyCode === 38) {
    if (event.target.previousElementSibling)
      event.target.previousElementSibling.focus();
    else {
      event.target.parentNode.previousElementSibling.focus();
      return false;
    }
  }
  return true;
};
export const handleArrowForDropDownButton = (event: any) => {
  const nextOption =
    event.target.nextElementSibling &&
    event.target.nextElementSibling.firstElementChild;
  const hasOptions = event.keyCode && event.keyCode === 40 && nextOption;
  if (hasOptions) {
    nextOption.focus();
    event.preventDefault();
  }
};
export const handleFlip = (
  element: any,
  shouldFlip: boolean,
  maxHeight: number
) => {
  if (
    !shouldFlip &&
    element?.getBoundingClientRect().y + maxHeight >= window.innerHeight
  ) {
    return true;
  }
  if (
    shouldFlip &&
    element?.getBoundingClientRect().y + maxHeight < window.innerHeight
  ) {
    return false;
  }
};
