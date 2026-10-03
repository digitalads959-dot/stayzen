/* ============================================================
   [Hostel Group Name] — small progressive-enhancement script
   Nothing here is required for the pages to work.
   1. Mobile menu toggle
   2. Enquiry form (no backend yet) -> friendly message
   3. Auto year in the footer
   ============================================================ */
(function () {
  "use strict";

  /* ---------- 1. Mobile menu ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    // close the menu after tapping a link (mobile)
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A" && window.innerWidth < 1000) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- 2. Enquiry form ----------
     No backend is connected yet. Replace the <form action=""> in the
     HTML with your form service / PHP endpoint, then delete the block
     below so the browser submits normally. */
  document.querySelectorAll("form[data-placeholder-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = form.querySelector(".form-status");
      if (status) {
        status.textContent =
          "Thank you. This form is not connected yet — please add your form action " +
          "(or call / WhatsApp us on [Phone Number]). Your details were not sent anywhere.";
        status.classList.add("is-visible");
      }
    });
  });

  /* ---------- 3. Footer year ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
