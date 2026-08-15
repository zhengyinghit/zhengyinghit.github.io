(function () {
  "use strict";

  // Mobile navigation toggle
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Highlight the nav link of the section currently in view (scroll-spy)
  var sections = document.querySelectorAll("main section[id]");
  var navLinks = document.querySelectorAll(".nav-menu a");
  if ("IntersectionObserver" in window && sections.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute("id");
          navLinks.forEach(function (a) {
            a.classList.toggle("active", a.getAttribute("href") === "#" + id);
          });
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    sections.forEach(function (s) { observer.observe(s); });
  }

  // Copy-to-clipboard for BibTeX entries
  function copyText(text, btn) {
    var done = function (ok) {
      var original = btn.textContent;
      btn.textContent = ok ? "Copied!" : "Failed";
      btn.classList.add("is-copied");
      setTimeout(function () {
        btn.textContent = original;
        btn.classList.remove("is-copied");
      }, 1200);
    };

    function fallback() {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        done(true);
      } catch (err) {
        done(false);
      }
      document.body.removeChild(ta);
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        done(true);
      }, fallback);
    } else {
      fallback();
    }
  }

  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var wrap = btn.closest(".bibtex-wrap");
      var pre = wrap ? wrap.querySelector("pre") : null;
      var text = pre ? pre.textContent : "";
      copyText(text, btn);
    });
  });
})();
