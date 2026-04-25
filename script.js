document.documentElement.classList.add("js");

const copyButtons = document.querySelectorAll(".copy-email");

function showCopyStatus(button, message) {
  const card = button.closest(".contact-card");
  const status = card ? card.querySelector(".copy-status") : null;

  if (!status) {
    return;
  }

  status.textContent = message;

  window.setTimeout(() => {
    status.textContent = "";
  }, 2200);
}

async function copyEmail(email) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(email);
    return;
  }

  const textArea = document.createElement("textarea");
  textArea.value = email;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "fixed";
  textArea.style.top = "-9999px";
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
}

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const email = button.dataset.email;

    if (!email) {
      return;
    }

    try {
      await copyEmail(email);
      showCopyStatus(button, "E-Mail kopiert");
    } catch (error) {
      showCopyStatus(button, "Kopieren nicht moeglich");
    }
  });
});
