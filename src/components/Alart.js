

class Alert {

    static success(msg){
        return `<p class="alert alert-success">${msg} <button class="alert-close"></button></p>`
    }
    static success(msg){
        return `    <p class="alert alert-danger">${msg} <button class="alert-close"></button></p>`
    }
    static info(msg){
        return `<p class="alert alert-info">${msg} <button class="alert-close"></button></p>`
    }
    static warning(msg){
        return `<p class="alert alert-warning">${msg} <button class="alert-close"></button></p>`
    }
    
}

export default Alert;