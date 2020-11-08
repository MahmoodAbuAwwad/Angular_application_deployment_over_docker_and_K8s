(function(window) {
    window.env = window.env || {};
    // Environment variables
    window["env"]["apiHost"] = "${API_URL}";
    window["env"]["debug"] = "${DEBUG}";
  })(this);