import {ElNotification} from "element-plus";

const errorText = function (messageObj) {
    let message = typeof messageObj === 'string' ? messageObj : null

    if (!message && messageObj.response && messageObj.response.data && messageObj.response.data.messages) {
        messageObj.response.data.messages.forEach(el => {
            ElNotification({message: el.message, type: 'error'})
        })
        return
    }
    if (!message) message = messageObj.detail || messageObj.message
    ElNotification({message, type: 'error'})
}

export default errorText

