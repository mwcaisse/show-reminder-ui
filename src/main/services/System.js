import Vue from "vue"
import {toast} from "bulma-toast";

import "@app/services/CustomDirectives.js";

class System {
    constructor() {
        this._events = new Vue();
    }

    get events() {
        return this._events;
    }

    _showAlert(options) {
        let defaults = {
            dismissible: true,
            position: "top-right",
            pauseOnHover: true,
            closeOnClick: true,
            duration: 3 * 1000
        };
        toast({...defaults, ...options});
    }

    showInfoAlert(message, options) {
        let defaults = {
            message: message,
            type: "is-info"
        }
        this._showAlert({...defaults, ...options});
    }

    showSuccessAlert(message, options) {
        let defaults = {
            message: message,
            type: "is-success"
        }
        this._showAlert({...defaults, ...options});
    }

    showErrorAlert(message, options) {
        let defaults = {
            message: message,
            type: "is-danger"
        }
        this._showAlert({...defaults, ...options});
    }

    setTitle(title) {
        document.title = title;
    }
}

export default new System();
