import Proxy from "@app/services/Proxy.js"

const defaultBaseUrl = "/api/";

class ShowService {

    constructor(baseUrl = defaultBaseUrl) {
        this.proxy = new Proxy(baseUrl);
    }

    search(terms) {
        return this.proxy.get(`show/search?terms=${terms}`);
    }

    get(id) {
        return this.proxy.get(`show/${id}`);
    }

    getAll() {
        return this.proxy.get("show/tracked/");
    }

    track(id) {
        return this.proxy.post(`show/tracked/add/${id}`);
    }

    untrack(id) {
        return this.proxy.delete(`show/tracked/${id}`);
    }
}

export {
    ShowService
};
