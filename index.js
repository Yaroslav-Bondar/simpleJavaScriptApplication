function render() {
    const productsStore = localStorageUtil.getProducts()
    headerPage.render()
    headerPage.putCount(productsStore.length)

    productsPage.render()
}
let CATALOG = []
render()
// var doesn`t pop up - ?
// var CATALOG = []
// server/catalog.json
// https://api.npoint.io/54f9c1a9e3e1658820c1
fetch('server/catalog.json')
    // alert(res.json())
    .then(res => res.json())
    .then(body => CATALOG = body)
    .catch(err => console.log(err))
console.log(CATALOG)

