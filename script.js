var menuIcon = document.querySelector(".menu-icons")
var sidebar = document.querySelector(".sidebar")

menuIcon.onclick = function() {
    sidebar.classList.toggle("small-sidebar")
}
