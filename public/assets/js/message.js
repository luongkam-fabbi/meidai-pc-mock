$(document).ready(function() {
  const arr = ["filter-all", "filter-gui", "filter-follow", "filter-favorite"];

  function closeAllTab() {
    arr.forEach(item => {
      $("#" + item).css("display", "none");
    });
  }

  arr.forEach(item => {
    const tabItem = $("input[aria-controls = " + item + "]");
    const tabItemCheck = $("input[aria-controls = " + item + "]:checked");
    
    if (tabItemCheck.length > 0) {
      $("#" + item).css("display", "block");
    }
    tabItem.click(function() {
      closeAllTab();
      $("#" + item).css("display", "block");
    });
  });
});