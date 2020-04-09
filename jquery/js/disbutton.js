// Disabled the submit button until the inputs are filled
(function () {
  $("input[type='text'],input[type='number']").bind(
    "keyup change",
    function () {
      var empty = false;
      $("input[type='text'],input[type='number']").each(function () {
        if ($(this).val() == "") {
          empty = true;
        }
      });
      if (empty) {
        $("#btnSubmit").attr("disabled", "disabled");
      } else {
        $("#btnSubmit").removeAttr("disabled");
      }
    }
  );
})();
