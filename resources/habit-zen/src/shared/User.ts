export class User {
    static getJwt() {
        return localStorage.getItem("jwt");
    }

    static setJwt(jwt: string) {
        localStorage.setItem("jwt", jwt);
    }
}


