import Router from './router'
import styles from './styles/main.css'

window.app = {
    init () {
        this.router = new Router()
        // console.log(this.router)
        this.router.history.start()
    }
}

window.app.init()