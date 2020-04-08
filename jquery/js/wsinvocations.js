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
      alert("ERROR" + res.statusText);
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
      $("#resultado").html(JSON.stringify(data));
    },
    error: function (res) {
      alert("ERROR" + res.statusText);
    },
  });
}

// Delete Activity with id
function deleteActivity() {
  var myUrl = "http://localhost:8080/activities/" + $("#forId").val();
  $.ajax({
    type: "GET",
    dataType: "json",
    url: myUrl,
    success: function (data) {
      $("#resGetHello").html(JSON.stringify(data[0]));
    },
    error: function (res) {
      alert("ERROR" + res.statusText);
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
    success: function (data) {
      alert("Activities Deleted!");
    },
    error: function (res) {
      alert("ERROR" + res.statusText);
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
      $("#forName").val("");
      $("#forDescription").val("");
      $("#forMaxAsist").val("");
    },
    error: function (res) {
      alert("ERROR" + res.statusText);
    },
  });
}

function putActivity() {
  
}
