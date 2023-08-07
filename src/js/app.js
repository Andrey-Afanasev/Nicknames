class Validator {
    validateUsername(name) {

        const re = /[\w-]/.test(name) //латиница и цифры и символы тире -, подчёркивания _
        const numbers = /\d{3,}/.test(name) // 3 и более цифры
        const beginning = /^[^\d_-]/.test(name); // не начинается с цифры - и _
        const end = /[^\d_-]$/.test(name); // не заканчивается с цифры - и _

        if (re && !numbers && beginning && end) {
            return name
        }


    }
}