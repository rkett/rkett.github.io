/*
* Variables
 */
var navBurgerMenu = document.querySelector(".navbar-burger");
var navMenu = document.querySelector(".navbar-menu");

/*
* burger_drop() -- Selects Bulma CSS navbar-burger and navbar-menu elements,
*                  and sets their status to active.
*/
function burger_drop() {
    navBurgerMenu.classList.toggle("is-active");
    navMenu.classList.toggle("is-active");
    return;
};


