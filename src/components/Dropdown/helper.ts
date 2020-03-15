export const handleArrowKeys = (event: any) => {
  if (event.keyCode === 40) {
    const nextOption = event.target.nextElementSibling;
    const lastOption = event.target.parentNode.firstElementChild;
    if (nextOption) nextOption.focus();
    else lastOption.focus();
  }
  if (event.keyCode === 38) {
    const prevOption = event.target.previousElementSibling;
    const firstOption = event.target.parentNode.lastElementChild;
    if (prevOption) prevOption.focus();
    else firstOption.focus();
  }
};
export const handleArrowForDropDownButton = (
  event: any,
  shouldFlip: boolean
) => {
  const nextOption =
    event.target.nextElementSibling && !shouldFlip
      ? event.target.nextElementSibling.firstElementChild
      : event.target.nextElementSibling.lastElementChild;
  const hasOptions = event.keyCode && nextOption;
  const canNavigate =
    (hasOptions && !shouldFlip && event.keyCode === 40) ||
    (shouldFlip && event.keyCode === 38);
  if (canNavigate) {
    nextOption.focus();
    event.preventDefault();
  }
};
export const handleFlip = (
  element: any,
  shouldFlip: boolean,
  maxHeight: number
) => {
  const elementHeight = element?.getBoundingClientRect().y + maxHeight;
  if (!shouldFlip && elementHeight >= window.innerHeight) {
    return true;
  }
  if (shouldFlip && elementHeight < window.innerHeight) {
    return false;
  }
};
