const li = Array.from(document.querySelectorAll("li"));

const getElementAttr = key => item => item.getAttribute(key);

const getAttrDataSlide = getElementAttr('data-slide');
const getAttrId = getElementAttr('id');

const dataSlideList = li.map(getAttrDataSlide);
const idList = li.map(getAttrDataSlide);

console.log(dataSlideList)
console.log(idList)