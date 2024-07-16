export const baseURL =
    window.location.host === "localhost:3000"
        ? ""
        : "https://vladoskin1998.github.io/helpcleanpro"

export const baseURLApi =
    window.location.host === "localhost:3000"
        ? "http://localhost:5000"
        : "https://helpcleanpro.com/"

export const formatDate = (d:Date | string) => {
    const date = new Date(d)
    const day = String(date.getDate()).padStart(2, "0")
    const month = String(date.getMonth() + 1).padStart(2, "0") // Месяцы начинаются с 0
    const year = date.getFullYear()

    return `${day}.${month}.${year}`
}
