// function used to fetch data from the wyr api
// export function to make it available to other parts of the program
// updated vite.config.js so that requests are sent to the api server, not the vite server
export default {
    getRandomWYR() {
        return fetch('/wyr').then(response => {
            return response.json()
        })
    }
}