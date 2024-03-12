window.onload = function () {
  document
    .getElementById("open-mobile-menu")
    ?.addEventListener("click", function () {
      document.getElementById("open-mobile-menu")?.classList.add("hidden");
      document.getElementById("close-mobile-menu")?.classList.remove("hidden");
      document.getElementById("mobile-menu")?.classList.remove("hidden");
      document.getElementById("mobile-menu")?.classList.add("flex");
    });

  document
    .getElementById("close-mobile-menu")
    ?.addEventListener("click", function () {
      document.getElementById("open-mobile-menu")?.classList.remove("hidden");
      document.getElementById("close-mobile-menu")?.classList.add("hidden");
      document.getElementById("mobile-menu")?.classList.add("hidden");
      document.getElementById("mobile-menu")?.classList.remove("flex");
    });
};
