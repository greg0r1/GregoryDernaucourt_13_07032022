export default class ApiCallsService {

    static async getToken(emailUser, passwdUser) {
        const response = await fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify({
                email: emailUser,
                password: passwdUser,
            }),
        })
        const data = await response.json()
        return data
    }

    static async getUserProfile(token) {
        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            }),
        })
        const data = await response.json()
        return data
    }

    static async updateUserProfile(token, firstName, lastName) {
        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'PUT',
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            }),
            body: JSON.stringify({
                "firstName": firstName,
                "lastName": lastName
            }),
        })
        const data = await response.json()
        return data
    }

}