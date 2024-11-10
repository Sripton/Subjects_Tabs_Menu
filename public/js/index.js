const filterBtn = document.querySelectorAll(".filter-btn");
const tabItem = document.querySelectorAll(".tab-item");

tabItem[0].style.overflow =  'auto';
for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", () => {
    for (let j = 0; j < filterBtn.length; j++) {
      filterBtn[j].classList.remove("active-btn");
    }
    filterBtn[i].classList.add("active-btn");
    const selectedTab = filterBtn[i].getAttribute("data-tab");
    for (let t = 0; t < tabItem.length; t++) {
      document.querySelector(".tab-filter-item-container").style.height =
        tabItem[t].scrollHeight + "px";
      if (tabItem[t].classList.contains(selectedTab)) {
        tabItem[t].classList.add("select-tab");
      } else {
        tabItem[t].classList.remove("select-tab");
      }
    }
  });
}
for (let i = 0; i < tabItem.length; i++) {
  document.querySelector(".tab-filter-item-container").style.height =
    tabItem[i].scrollHeight + "px";
}
