const stylesActiveElement = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "50px",
  height: "50px",
  color: "#fff",
  cursor: "pointer",
  background: "#2c241d",
};

const removeAllAttributes = (links) => {
  links.forEach((link) => {
    const attributeLink = link;
    attributeLink.removeAttribute("data-js");
  });
};

const removeAllStyles = (elements) => {
  elements.forEach((element) => {
    element.style = "";
  });
};

const addAttribute = ({ target }) => {
  target.setAttribute("data-js", "active");
};

const verifyIsElementHasDataJs = (element, allLinks) => {
  const { js } = element.target.dataset;

  const stylesSizeElement = JSON.stringify(stylesActiveElement)
    .replaceAll("{", "")
    .replaceAll("}", "")
    .replaceAll('"', "")
    .replaceAll(",", ";")
    .toLowerCase();

  element.target.style = "";

  if (js) {
    removeAllAttributes(allLinks);
    removeAllStyles(allLinks);
    element.target.style = stylesSizeElement;
    addAttribute(element);
  }
};

export const activeSizeClasses = (element) => {
  const allLinks = element.target.parentElement.querySelectorAll("span");
  removeAllAttributes(allLinks);
  addAttribute(element);
  verifyIsElementHasDataJs(element, allLinks);
};
