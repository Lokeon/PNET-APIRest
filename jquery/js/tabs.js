// Get the tabsbuttons
var tabButtons = document.querySelectorAll(".buttonContainer button");
// Get the tabPanel
var tabPanels = document.querySelectorAll(".tabPanel");

// Show pannel
function showPanel(panelIndex, colorCode) {
  tabButtons.forEach(function (node) {
    node.style.backgroundColor = "";
    node.style.color = "";
  });
  tabButtons[panelIndex].style.backgroundColor = colorCode;
  tabButtons[panelIndex].style.color = "black";
  tabPanels.forEach(function (node) {
    node.style.display = "none";
  });
  tabPanels[panelIndex].style.display = "flex";
}
showPanel(0, "#D8AC34");
