const faqListItems = document.querySelectorAll('.Asked-Frequently ul li')
faqListItems.forEach((e) => {
    e.addEventListener('click', () => {
        e.querySelector('p').classList.toggle('hidden')
    })
})