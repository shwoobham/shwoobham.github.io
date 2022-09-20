const Theme = {
    "DARK": 0,
    "LIGHT": 1
}

class LocalStorage {

    constructor(theme, color) {
        this.theme = theme;
        this.color = color;
    }

    getTheme() {
        return localStorage.getItem("theme");
    }

    getColor() {
        return localStorage.getItem("color");
    }

    updateTheme(theme) {
        this.theme = theme;
        localStorage.setItem("theme", this.theme)
    }

    updateColor(color) {
        this.color = color;
        localStorage.setItem("color", this.color);
    }

}

const localstorage = new LocalStorage();

