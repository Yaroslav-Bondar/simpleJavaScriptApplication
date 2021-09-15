class Products {
    constructor() {
        this.classNameActive = 'products__element-btn_active'
        this.labelAdd = 'Add to Shopping Cart'
        this.labelRemove = 'Remove from Cart'
    }

    handleSetLocationStorage(el, id) {
        const {pushProduct, products} = localStorageUtil.putProducts(id)
        if(pushProduct) {
            el.classList.add(this.classNameActive)
            el.innerHTML = this.labelRemove
        }
        else {
            el.classList.remove(this.classNameActive)
            el.innerHTML = this.labelAdd
        }
        headerPage.putCount(products.length)
    }
    render() {
        const productsStore = localStorageUtil.getProducts()
        let htmlCatalog = ''

        CATALOG.forEach(({id, name, img, currency ,price}) => {
            let activeClass = ''
            let activeText = ''

            if(productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd
            }
            else {
                activeText = this.labelRemove
                activeClass = this.classNameActive
            }

            htmlCatalog += `
                <li class='products__element'>
                    <span class='products__element-name'>${name}</span>
                    <img class='products__element-img' src='${img}' />
                    <div class='products__element-currency-wrap'>
                        <span class='products__element-price'>👉🏽 ${price}</span>
                        <span class='products__element-currency'>${currency}</span>
                    </div>
                    <button onclick='productsPage.handleSetLocationStorage(this, "${id}")' class='products__element-btn ${activeClass}'>${activeText}</button>
                </li>
            `
        })
        let html = `
            <ul class='products__container'>
                ${htmlCatalog}
            </ul>
        `
        ROOT_PRODUCTS.innerHTML = html
    }
}

const productsPage = new Products()
// productsPage.render()