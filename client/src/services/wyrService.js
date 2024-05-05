// function used to fetch data from the wyr api
// export function to make it available to other parts of the program
export default {
    getRandomWYR() {
        return fetch('/wyr').then(response => {
            return response.json()
        })
    }
}