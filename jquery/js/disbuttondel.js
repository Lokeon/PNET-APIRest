// Disabled the submit button and delete button until you get the activity to delete.
(function () {
  $("#forId").bind("keyup change", function () {
    var empty = false;
    $("#forId").each(function () {
      if ($(this).val() == "") {
        empty = true;
      }
    });
    if (empty) {
      $("#btnSubmit").attr("disabled", "disabled");
      $("#btnDELETE").attr("disabled", "disabled");
    } else {
      $("#btnSubmit").removeAttr("disabled");
      $("#btnDELETE").removeAttr("disabled");
    }
  });
})();
