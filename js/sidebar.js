let content = ["user setting","trending","latest relased","recommended","TV-series","genre","action","adventure","horror","fantasy","sci-Fi","comedy","family","romance",]

// create side bar content dom elements
let sidebarContent = document.querySelector(".sidebar-content")
    
function drawSidebarContent() {
    let theItems = content.map((item) => {
        return `<a href="./MOVIES-CATEGORY/movies-category.html">${item}</h6>`
    }).join("")
    sidebarContent.innerHTML += theItems
}
drawSidebarContent()

// show and hide side bar
let sidebar = document.querySelector(".sidebar")
let navToggle = document.querySelector(".sidebar-toggle")
let closeSideBarBtn = document.querySelector(".close-sidebar")

navToggle.addEventListener("click", () => {
    if (sidebar.classList.contains("show-sidebar")) {
        sidebar.classList.remove("show-sidebar")
    } else {
        sidebar.classList.add("show-sidebar")
    }
})

closeSideBarBtn.addEventListener("click", () => {
    sidebar.classList.remove("show-sidebar")

})
