const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion-header");
  const content = item.querySelector(".accordion-content");
  const icon = item.querySelector(".accordion-icon");

  header.addEventListener("click", () => {
    // Закрываем все остальные
    accordionItems.forEach((otherItem) => {
      if (otherItem !== item) {
        const otherContent = otherItem.querySelector(".accordion-content");
        const otherIcon = otherItem.querySelector(".accordion-icon");

        otherContent.style.maxHeight = null;
        otherIcon.textContent = "+";
        otherIcon.style.transform = "rotate(0deg)";
      }
    });

    // Открываем / закрываем текущий
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      icon.textContent = "+";
      icon.style.transform = "rotate(0deg)";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      icon.textContent = "×";
      icon.style.transform = "rotate(0deg)";
    }
  });
});
