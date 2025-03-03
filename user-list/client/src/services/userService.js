const baseURL = 'http://localhost:3030/jsonstore/users'


export default {
    async getAll() {
        const response = await fetch(baseURL);
        const result = await response.json()
        const users = Object.values(result);
        return users
    },
    async getOne(userId) {
        const response = await fetch(`${baseURL}/${userId}`);
        const user = await response.json()
        return user
    },
    async create(userDate) {
        const postDate = transformUserDate(userDate)

        const response = await fetch(baseURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postDate),
        })
        const result = await response.json()
        return result
    },
    async delete(userId) {
        const response = await fetch(`${baseURL}/${userId}`, {
            method: 'DELETE'
        })

        const result = await response.json()
        return result
    },
    async update(userId, userDate) {
        const postData = transformUserDate(userDate);
        postData._id = userId

        const response = await fetch(`${baseURL}/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData),
        })
        const result = await response.json()
        return result

    }
}

function transformUserDate(userDate) {
    const { country, city, street, streetNumber, ...transormedDate } = userDate

    transormedDate.address = { country, city, street, streetNumber }
    transormedDate.createdAt = new Date().toISOString()
    transormedDate.updatedAt = new Date().toISOString()

    return transormedDate
}