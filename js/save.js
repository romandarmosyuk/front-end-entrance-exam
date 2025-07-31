const html2pdf = window.html2pdf;
export function setupPDFDownload() {
  const btn = document.querySelector(".header__link");
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const element = document.querySelector(".resume");
    const width = element.offsetWidth + 2;
    const height = element.offsetHeight + 5;

    const opt = {
      margin: [0, 0, 0, 0],
      filename: "Exam-CV.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
      },
      jsPDF: {
        unit: "px",
        format: [width, height],
        orientation: "portrait",
      },
    };

    html2pdf().set(opt).from(element).save();
  });
}
