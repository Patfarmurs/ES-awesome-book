export default navItems.forEach((navItem) => {
    navItem.addEventListener('click', (e) => {
      navItems.forEach((n) => {
        n.classList.remove('active');
      });
        addNavSection(e);
    });
});