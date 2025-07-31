import { turnOnRippleAnimation } from "./ripple";
import { setupPDFDownload } from "./save";

function loadEditableFields() {
  document.querySelectorAll(".editable").forEach((el, i) => {
    el.setAttribute("spellcheck", "false");

    const saved = localStorage.getItem(`editable-${i}`);

    if (saved) el.textContent = saved;

    el.addEventListener("input", () => {
      localStorage.setItem(`editable-${i}`, el.textContent);
    });
  });
}

loadEditableFields();

turnOnRippleAnimation();

setupPDFDownload();
