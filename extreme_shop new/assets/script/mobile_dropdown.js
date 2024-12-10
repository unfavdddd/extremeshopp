/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function mobile_dropdown() {
  document.getElementById("mobile_dropdown-menu").classList.toggle("mobile_show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".mobile_dropdown-btn")) {
    var dropdowns = document.getElementsByClassName("mobile_dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("mobile_show")) {
        openDropdown.classList.remove("mobile_show");
      }
    }
  }
};
