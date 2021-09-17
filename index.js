function render() {
    const productsStore = localStorageUtil.getProducts()
    headerPage.render()
    headerPage.putCount(productsStore.length)
    productsPage.render()
}
// start spinner
spinnerPage.render()
// catalog of produts
let CATALOG = []
// load data
fetch('server/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body
        // to check the work of the spinner
        // setTimeout(()=> {
            // stop spinner
            spinnerPage.handleClear()
            render()
        // }, 5000)
    })
    .catch(err => {
        console.log(err)
    }) 

