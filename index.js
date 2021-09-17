function render() {
    const productsStore = localStorageUtil.getProducts()
    headerPage.render()
    headerPage.putCount(productsStore.length)

    productsPage.render()
}
let CATALOG = []

fetch('1server/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body
        render()
    })
    .catch(err => {
        console.log(err)
    }) 

