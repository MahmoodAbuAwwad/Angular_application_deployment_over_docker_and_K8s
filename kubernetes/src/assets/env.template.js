(function(window) {
    window.env = window.env || {};
    // Environment variables
    window["env"]["API_URL"] = "${API_URL}";
    window["env"]["PORT"] = "${PORT}";
    window["env"]["debug"] = "${DEBUG}";
  })(this);
