(function () {
  $(".insertar input").on("keyup change", function () {
    var empty = false;
    $(".insertar input").each(function () {
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
