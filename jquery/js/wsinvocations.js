// Get Activity with id
function getActivity() {
  var myUrl = "http://localhost:8080/activities/" + $("#forId").val();
  $.ajax({
    type: "GET",
    // dataType -> tipo dato que vas obtener del server
    dataType: "json",
    url: myUrl,
    success: function (data) {
      $(".titulo").html(JSON.stringify(data[0].name).replace(/"/g, ""));
      $(".descripcion").html(
        JSON.stringify(data[0].description).replace(/"/g, "")
      );
      $(".asistentes").html(JSON.stringify(data[0].maxasist).replace(/"/g, ""));
    },
    error: function (res) {
      Swal.fire({
        icon: "error",
        text:
          "ERROR: No se ha podido extraer la información. Puede que la actividad que esté intentando consultar no exista o que no se esté comunicando con el servidor.",
      });
    },
  });
}

// Get All Activities
function getAllActivities() {
  var myUrl = "http://localhost:8080/activities/";
  $.ajax({
    type: "GET",
    dataType: "json",
    url: myUrl,
    success: function (data) {
      var cabecera =
        " <tr> <th>Id</th><th>Nombre</th><th>Descripción</th><th>Asistentes</th> </tr>";
      var filas;
      for (var i in data) {
        filas +=
          "<tr> <td>" +
          JSON.stringify(data[i]._id).replace(/"/g, "") +
          "</td>" +
          "<td>" +
          JSON.stringify(data[i].name).replace(/"/g, "") +
          "</td>" +
          "<td>" +
          JSON.stringify(data[i].description).replace(/"/g, "") +
          "</td>" +
          "<td>" +
          JSON.stringify(data[i].maxasist).replace(/"/g, "") +
          "</td> </tr>";
        $(".resultado2").html(cabecera + filas);
      }
    },
    error: function (res) {
      Swal.fire({
        icon: "error",
        text:
          "ERROR: No se ha podido extraer la información. Compruebe su conexión con el servidor.",
      });
    },
  });
}

// Delete Activity with id
function deleteActivity() {
  var myUrl = "http://localhost:8080/activities/" + $("#forId").val();
  $.ajax({
    type: "DELETE",
    dataType: "json",
    url: myUrl,
    success: function () {
      Swal.fire({
        title: "¿Estas seguro de eliminar la actividad?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancelar",
        confirmButtonText: "Sí, eliminar!",
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            "Eliminado!",
            "La actividad se ha eliminado con éxito.",
            "success"
          ).then(function () {
            location.href = "./eliminar.html";
          });
        }
      });
    },
    error: function () {
      Swal.fire({
        icon: "error",
        text:
          "ERROR: No ha podido eliminarse. Puede que la actividad que esté intentando eliminar no exista o que no se esté comunicando con el servidor.",
      });
    },
  });
}

// Delete All Activities
function deleteActivities() {
  var myUrl = "http://localhost:8080/activities/";
  $.ajax({
    type: "DELETE",
    dataType: "json",
    url: myUrl,
    success: function () {
      Swal.fire({
        title: "¿Estas seguro de eliminar todo?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancelar",
        confirmButtonText: "Sí, eliminar todo!",
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            "Eliminado!",
            "Todas las actividades han sido eliminadas.",
            "success"
          ).then(function () {
            location.reload();
          });
        }
      });
    },
    error: function () {
      Swal.fire({
        icon: "error",
        text:
          "ERROR: No ha podido eliminarse. Compruebe su conexión con el servidor.",
      });
    },
  });
}

// Create Activity
function postActivity() {
  var myUrl = "http://localhost:8080/activities/";
  $.ajax({
    type: "POST",
    // contentType -> lo que vas a enviar al server
    contentType: "application/json",
    url: myUrl,
    data: JSON.stringify({
      name: $("#forName").val(),
      description: $("#forDescription").val(),
      maxasist: $("#forMaxAsist").val(),
    }),
    success: function () {
      Swal.fire({
        icon: "success",
        text: "Insertado con éxito!",
      }).then(function () {
        location.href = "./insertar.html";
      });
    },
    error: function () {
      Swal.fire({
        icon: "error",
        text:
          "ERROR: No ha podido insertarse. Compruebe su conexión con el servidor.",
      });
    },
  });
}

// Get Activity with id for inputs
function getActivityIn() {
  var myUrl = "http://localhost:8080/activities/" + $("#forId").val();
  $.ajax({
    type: "GET",
    // dataType -> tipo dato que vas obtener del server
    dataType: "json",
    url: myUrl,
    success: function (data) {
      $("#forName").val(JSON.stringify(data[0].name).replace(/"/g, ""));
      $("#forDescription").val(
        JSON.stringify(data[0].description).replace(/"/g, "")
      );
      $("#forMaxAsist").val(JSON.stringify(data[0].maxasist).replace(/"/g, ""));
    },
    error: function () {
      Swal.fire({
        icon: "error",
        text:
          "ERROR: No se ha podido extraer la información. Puede que la actividad que esté intentando consultar no exista o que no se esté comunicando con el servidor.",
      });
    },
  });
}

// Update Activity with Id
function putActivity() {
  var myUrl = "http://localhost:8080/activities/" + $("#forId").val();
  $.ajax({
    type: "PUT",
    contentType: "application/json",
    url: myUrl,
    data: JSON.stringify({
      name: $("#forName").val(),
      description: $("#forDescription").val(),
      maxasist: $("#forMaxAsist").val(),
    }),
    success: function () {
      Swal.fire({
        icon: "success",
        text: "Modificado con éxito!",
      });
      $("#forName").val(JSON.stringify(data[0].name).replace(/"/g, ""));
      $("#forDescription").val(
        JSON.stringify(data[0].description).replace(/"/g, "")
      );
      $("#forMaxAsist").val(JSON.stringify(data[0].maxasist).replace(/"/g, ""));
    },
    error: function (res) {
      Swal.fire({
        icon: "error",
        text:
          "ERROR: No se ha podido actualizar la información. Puede que la actividad que esté intentando modificar no exista o que no se esté comunicando con el servidor.",
      });
    },
  });
}
