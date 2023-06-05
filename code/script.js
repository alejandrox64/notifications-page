const markAll = document.querySelector(".mark-all")
const notifications = document.querySelectorAll('.notification-container')
const notSeen = document.querySelectorAll('.not-seen')

markAll.addEventListener("click", () => {
    notSeen.forEach(e => {
        e.classList.remove("not-seen");
    })
})

