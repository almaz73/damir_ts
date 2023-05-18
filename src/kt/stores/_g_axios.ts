import axios from "axios"
// @ts-ignore
import errorText from '../../kt/utils/errorService.js'
/* единый центр обработки сетевых ошибок */
let errMessage: Array<boolean> = []
axios.interceptors.response.use(resp => resp,
    err => {
        if (!errMessage[err.message]) errMessage[err.message] = true
        else return false
        if (err.message.includes('403')) setTimeout(() => errorText('Нужно зарегистрироваться'))
        errorText(err)
    })

