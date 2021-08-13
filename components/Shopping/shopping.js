class Shopping {
    render() {
        const productsStore = localStorageUtil.getProducts()
        let htmlCatalog = ''
        // img, 
        CATALOG.forEach(({id, name, currency, price}) => {
            if(productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <tr>
                        <td>👉🏽 ${name}</td>
                        <td>${price} ${currency}</td>
                    </tr>
                `
            }
        })
        
        const html = `
            <div>
                <table>
                    ${htmlCatalog}
                </table>
            </div>
        `
        ROOT_SHOPPING.innerHTML = html
    }
} 

const shoppingPage = new Shopping()