(function () {
  $("#forName,#forDescription,#forMaxAsist").bind("keyup change", function () {
    var empty = false;
    $("#forName,#forDescription,#forMaxAsist").each(function () {
      if ($(this).val() == "") {
        empty = true;
      }
    });

    if (empty) {
      $("#btnSubmit").attr("disabled", "disabled");
    } else {
      $("#btnSubmit").removeAttr("disabled");
    }
  });
})();
