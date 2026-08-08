const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuToggle && siteNav) {
  const closeMenu = () => {
    siteNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

const plans = {
  4: { price: "2 400 ₽", duration: "30 дней", freeze: "7 дней", index: "01 / 07", label: "тренировки" },
  8: { price: "4 200 ₽", duration: "30 дней", freeze: "7 дней", index: "02 / 07", label: "тренировок" },
  12: { price: "6 200 ₽", duration: "45 дней", freeze: "7 дней", index: "03 / 07", label: "тренировок" },
  16: { price: "8 200 ₽", duration: "60 дней", freeze: "7 дней", index: "04 / 07", label: "тренировок" },
  24: { price: "11 200 ₽", duration: "75 дней", freeze: "7 дней", index: "05 / 07", label: "тренировки" },
  32: { price: "14 800 ₽", duration: "90 дней", freeze: "10 дней", index: "06 / 07", label: "тренировки" },
  36: { price: "16 200 ₽", duration: "120 дней", freeze: "10 дней", index: "07 / 07", label: "тренировок" },
};

const planButtons = document.querySelectorAll(".plan-option");
const planDetail = document.querySelector(".plan-detail");
const planCount = document.querySelector("#plan-count");
const planPrice = document.querySelector("#plan-price");
const planDuration = document.querySelector("#plan-duration");
const planFreeze = document.querySelector("#plan-freeze");
const planIndex = document.querySelector(".plan-index");
const planLabel = document.querySelector(".plan-count span");

const updatePlan = (key) => {
  const plan = plans[key];
  if (!plan || !planCount) return;

  planButtons.forEach((button) => {
    const isActive = button.dataset.plan === String(key);
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  planCount.textContent = key;
  planPrice.textContent = plan.price;
  planDuration.textContent = plan.duration;
  planFreeze.textContent = plan.freeze;
  planIndex.textContent = plan.index;
  planLabel.textContent = plan.label;

  if (planDetail && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    planDetail.animate(
      [{ opacity: 0.55, transform: "translateY(5px)" }, { opacity: 1, transform: "translateY(0)" }],
      { duration: 260, easing: "ease-out" },
    );
  }
};

planButtons.forEach((button) => button.addEventListener("click", () => updatePlan(button.dataset.plan)));

const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}
