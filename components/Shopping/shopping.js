class Shopping {
    handleClear() {
        ROOT_SHOPPING.innerHTML = ''
    }
    render() {
        const productsStore = localStorageUtil.getProducts()
        let sumCatalog = 0
        let htmlCatalog = ''
        let currentCurrency
        // img, 
        CATALOG.forEach(({id, name, currency, price}) => {
            if(productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <tr>
                        <td class='shopping__element-name'>👉🏽 ${name}</td>
                        <td class='shopping__element-price'>${price} ${currency}</td>
                    </tr>
                `
                sumCatalog += price
                // write currency without rewriting
                if(!currentCurrency)
                    currentCurrency = currency
            }
        })
        
        const html = `
            <div class='shopping__container'>
                <div class="shopping__close" onclick="shoppingPage.handleClear()"></div>
                <table>
                    ${htmlCatalog}
                    <tr>
                        <td class='shopping__element-name'>👉🏽 Total Price:</td>
                        <td class='shopping__element-price'>${sumCatalog} ${currentCurrency}</td>
                    </tr>   
                </table>
            </div>
        `
        ROOT_SHOPPING.innerHTML = html
    }
} 

const shoppingPage = new Shopping()