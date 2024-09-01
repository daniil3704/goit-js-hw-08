let categories = document.querySelectorAll('.item')
console.log(`Number of categories: ${categories.length}`)

categories.forEach(category => {
    let name = category.querySelector('h2')
    let items = category.querySelectorAll('li')
    console.log(`Category: ${name.textContent}`)
    console.log(`Elements: ${items.length}`)
});

