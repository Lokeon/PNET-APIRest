// Get Activity with id
function getActivity(idActivity) {
  var myUrl = "http://localhost:8080/activities/" + idActivity;
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

// Get All Activities
function getAllActivities() {
  var myUrl = "http://localhost:8080/activities/";
  $.ajax({
    type: "GET",
    dataType: "json",
    url: myUrl,
    success: function (data) {
      $("#resGetHello").html(JSON.stringify(data));
    },
    error: function (res) {
      alert("ERROR" + res.statusText);
    },
  });
}

// Delete Activity with id
function deleteActivity(idActivity) {
  var myUrl = "http://localhost:8080/activities/" + idActivity;
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
  var dataForm = $("#form").serialize();
  $.ajax({
    type: "POST",
    url: "http://localhost:8080/activities/",
    contentType: "application/json",
    data: dataForm,
    success: function (data) {
      $("#resGetHello").html(data);
    },
    error: function (res) {
      alert("ERROR" + res.statusText);
    },
  });
  return false;
}
