// table
document.getElementById("select-all").onclick = function () {
  var checkboxes = document.getElementsByName("checkbox-list");
  for (var checkbox of checkboxes) {
    checkbox.checked = this.checked;
  }
};
