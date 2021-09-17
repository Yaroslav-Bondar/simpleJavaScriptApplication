class Header {
    handlerOpenShopingPage() {
        shoppingPage.render()
    }
    render() {
        const html = `
            <div class='header__conteiner'>
                <div class='header__counter' onclick='headerPage.handlerOpenShopingPage()'>
                    🔥 <span class='header__counter-item'></span>
                </div>
            </div>
        `
        ROOT_HEADER.innerHTML = html
    }
    putCount(count) {
        const element = document.querySelector('.header__counter-item')
        element.innerHTML = count
    }
}

headerPage = new Header()
