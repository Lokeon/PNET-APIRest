function getHello() {
  $.ajax({
    type: "GET",
    url: "http://localhost:8080/",
    success: function(data) {
      $("#resGetHello").html(data);
    },
    error: function(res) {
      alert("ERROR:" + res.statusText);
    }
  });
}

function getHello2() {
  var req = $.ajax({ type: "GET", url: "http://localhost:8080/" });
  req.done(function(data) {
    $("#resGetHello").html(data);
  });
  req.fail(function(res) {
    alert("ERROR" + res.statusText);
  });
}

// mostrar info con id peli
function getMovie(movieId) {
  var myUrl = "http://localhost:8080/movies/" + movieId;
  $.ajax({
    type: "GET",
    dataType: "json",
    url: myUrl,
    success: function(data) {
      $("#resGetHello").html(JSON.stringify(data[0]));
    },
    error: function(res) {
      alert("ERROR" + res.statusText);
    }
  });
}

// crear cosas con esos datos
function postMovie() {
  $.ajax({
    type: "POST",
    url: "http://localhost:8080/movies/",
    contentType: "application/json",
    dataType: "text",
    data: JSON.stringify({
      title: "Dunkirk",
      director: "ChristopherNolan",
      year: 2017
    }),
    success: function(data) {
      $("#resGetHello").html(data);
    },
    error: function(res) {
      alert("ERROR" + res.statusText);
    }
  });
}

// todas las pelis
function getAllMovies() {
  var myUrl = "http://localhost:8080/movies/";
  $.ajax({
    type: "GET",
    dataType: "json",
    url: myUrl,
    success: function(data) {
      $("#resGetHello").html(JSON.stringify(data));
    },
    error: function(res) {
      alert("ERROR" + res.statusText);
    }
  });
}
