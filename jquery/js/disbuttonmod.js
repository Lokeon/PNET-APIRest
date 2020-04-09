// Disabled the submit button and the inputs until you get the activity to modified
(function () {
  $("#forId").bind("keyup change", function () {
    var empty = false;
    $("#forId").each(function () {
      if ($(this).val() == "") {
        empty = true;
      }
    });
    if (empty) {
      $("#btnFind").attr("disabled", "disabled");
      $("#btnPUT").attr("disabled", "disabled");
      $("#forName").attr("disabled", "disabled");
      $("#forDescription").attr("disabled", "disabled");
      $("#forMaxAsist").attr("disabled", "disabled");
    } else {
      $("#btnFind").removeAttr("disabled");
      $("#btnPUT").removeAttr("disabled");
      $("#forName").removeAttr("disabled");
      $("#forDescription").removeAttr("disabled");
      $("#forMaxAsist").removeAttr("disabled");
    }
  });
})();
