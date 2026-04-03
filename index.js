// Gets the Y Coordinate of the Section Headers
function getSectionY(ni, s) {
  let c = [];

  ni.forEach((_el, i) => {
    if (s[i]) c[i] = s[i].getBoundingClientRect().y;
  });

  return c;
}
// Gets the Section Header closest to a set point
function getClosestSection(c) {
  let n = [Infinity, 1000];

  c.forEach((e, i) => {
    let less = Math.abs(200 - Math.abs(e)) < Math.abs(n[1]);
    if (less) n = [i, e];
  });
  
  return n;
}
// Clears active from all Nav Items
function clearActiveNav(n) {
  n.forEach(el => {
    el.classList.remove('active');
  })
}
// Indicate active Section in the Nav
function indicateActiveSection() {
  let navItems = document.querySelectorAll("nav li a");
  let sections = document.querySelectorAll("section");
  let coords = getSectionY(navItems, sections);

  window.addEventListener("scrollend", e => {
    coords = getSectionY(navItems, sections);
    let nearest200 = getClosestSection(coords)

    clearActiveNav(navItems);
    navItems[nearest200[0]].classList.add('active');
  })
}

window.onload = () => {
  indicateActiveSection();
}