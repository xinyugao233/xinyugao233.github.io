const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const navAnchors = Array.from(document.querySelectorAll(".nav-links a"));
const copyEmailButtons = document.querySelectorAll("[data-copy-email]");

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "absolute";
  textArea.style.left = "-9999px";
  document.body.appendChild(textArea);
  textArea.select();
  textArea.setSelectionRange(0, text.length);

  const didCopy = document.execCommand("copy");
  document.body.removeChild(textArea);

  if (!didCopy) {
    throw new Error("Fallback copy failed");
  }
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    navLinks.classList.toggle("is-open", !expanded);
  });

  navAnchors.forEach((anchor) => {
    anchor.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      navLinks.classList.remove("is-open");
    });
  });
}

copyEmailButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const email = button.getAttribute("data-copy-email");
    const status = button.parentElement?.querySelector(".copy-email-status");

    if (!email || !status) {
      return;
    }

    try {
      await copyText(email);
      status.textContent = "Copied";
    } catch {
      window.prompt("Copy email:", email);
      status.textContent = "Ready to copy";
    }

    window.clearTimeout(button._copyTimeoutId);
    button._copyTimeoutId = window.setTimeout(() => {
      status.textContent = "";
    }, 1800);
  });
});
