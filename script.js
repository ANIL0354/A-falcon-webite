document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".menu-toggle");
  var menu = document.getElementById("mobile-navigation");

  if (toggle && menu) {
    var setMenu = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      menu.hidden = !open;
    };

    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });

    menu.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        setMenu(false);
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        toggle.focus();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 768) {
        setMenu(false);
      }
    });
  }

  var normalizePath = function (path) {
    path = path.replace(/\/+$/, "").replace(/\/index\.html$/, "");
    return path || "/";
  };
  var currentPath = normalizePath(window.location.pathname);
  var currentHash = window.location.hash;
  var navLinks = document.querySelectorAll("[data-nav]");

  navLinks.forEach(function (link) {
    var url = new URL(link.href, window.location.href);
    var samePage = normalizePath(url.pathname) === currentPath;
    var matchingHash = url.hash ? url.hash === currentHash : currentHash === "";

    if (samePage && matchingHash) {
      link.setAttribute("aria-current", "page");
    }
  });
});
