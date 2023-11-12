const STORAGE_KEY = "tu-do-list";

export function saveData(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function getData() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);

        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.log(error.message);
    }
}
