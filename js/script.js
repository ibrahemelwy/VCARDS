import utilities from './functions.js';

document.addEventListener("input", (e) => {
  if (e.target.classList.contains("data__input"))
    utilities.checkData(e.target);
})
document.addEventListener("change", (e) => {
  if (e.target.getAttribute("name") != "extension" && !e.target.classList.contains("data__input"))
    utilities.updateQR()
})
document.addEventListener("click", (e) => {
  if (e.target.getAttribute("id") === "generateQr") {
    utilities.enableOptions();
    utilities.enableItem(utilities.$buttonDownload)
    if (!utilities.$qrContainer.innerHTML)
      utilities.generateQR();
    else
      utilities.updateQR();
  }
  if (e.target.getAttribute("id") === "clear")
    utilities.clear();
  if (e.target.getAttribute("id") === "download")
    utilities.downloadQR();
})