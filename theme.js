document.addEventListener("DOMContentLoaded", e => {
  const style = document.head.querySelector('link[rel="stylesheet"]');
  const styleButton = document.querySelector('button.theme');
  styleButton.addEventListener('click', e => {
    let ref = style.href;
    
    if (ref.endsWith("index.css")) {
      style.setAttribute("href", "./darkmode.css");
    } else {
      style.setAttribute("href", "./index.css")
    }
  })
})