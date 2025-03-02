const baseURL = 'http://localhost:3030/jsonstore/users'


export default {
    async getAll() {
        const response = await fetch(baseURL);
        const result = await response.json()
        const users = Object.values(result);
        return users
    },
    async create(userDate) {
        const {country,city,street,streetNumber,postDate} = userDate

        postDate.address = {country,city,street,streetNumber}
        postDate. createdAt=new Date().toISOString()
        postDate. updatedAt=new Date().toISOString()
          
        const response = await fetch(baseURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userDate),
        })
        const result = await response.json()
        return result
    }
}