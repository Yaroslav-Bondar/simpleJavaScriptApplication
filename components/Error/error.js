class Error {
    render() {
        const html = `
            <div class="error__container">
                <div class="error__message">
                    <h3>No acces !!!</h3>
                    <p>please try again later</p>
                </div>
            </div>    
        `
        ROOT_ERROR.innerHTML = html
    }
}

const errorPage = new Error()