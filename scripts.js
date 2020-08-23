const formContainer = document.querySelector(".form-container")
const buttonDeactiveForm = document.querySelector(".form-container header button")
const buttonInterage = document.querySelectorAll(".container-section .header-wrapper header button")

const openFormContainerWithScroll = (e) => {
    formContainer.classList.add("onScroll")

    if (window.outerWidth >= 1024) {

        if (window.scrollY >= 300) {
            formContainer.style.transform = "translateX(100%)"
        } else {
            formContainer.style.transform = "translateX(0)"
        }
    }
}

const openFormContainer = (e) => {
    formContainer.classList.remove("onScroll")
    formContainer.style.transform = "translateX(0)"
}

const closeFormContainer = (e) => {
    formContainer.classList.remove("onScroll")
    formContainer.style.transform = "translateX(100%)"
}

const randomTextInBtnInterage = (e) => {
    buttonInterage.forEach(btn => {
        range = Math.floor(Math.random() * 2)
        btn.textContent = range === 1 ? "acessar" : "interagir"
    })
}


buttonInterage.forEach(btnInterage => {
    btnInterage.addEventListener("click", openFormContainer)
})


buttonDeactiveForm.addEventListener("click", closeFormContainer)

window.addEventListener("scroll", openFormContainerWithScroll)

window.addEventListener("load", randomTextInBtnInterage)
window.addEventListener("load", () => {
    formContainer.classList.add("onScroll")
})