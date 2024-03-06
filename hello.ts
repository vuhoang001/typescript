
// String 
let a: string = "xin chao !"


//object 

const user: {
    fullName: string,
    email: String,
    age: Number
} = {
    fullName: "Tran Vu Hoang",
    email: "vuhoang250203@gmail.com",
    age: 12
}

console.log(user)

// 5.Interface 
interface User {
    fullName: String,
    email: String,
    age?: Number,
    socials?: {
        zalo: String,
        facebook: String
    }
}

let detail: User = {
    fullName: "Tran Vu Hoang",
    email: "Vuhoang250203@gmail.com",
    age: 11,
    socials: {
        zalo: "zalo.com",
        facebook: "facebook.com"
    }
}
console.log(detail)

// 6. Extend interface  
interface Account {
    fullName: String,
    email: String,
    phone: String,
    password: String
}

interface AdminAccount extends Account {
    roleID: String,
    hotline: String
}

interface ClientAccount extends Account {
    score: String,
    average: Number
}

const admin: AdminAccount = {
    fullName: "Le Van A",
    email: "levana@gmail.com",
    phone: "123345",
    password: "hoang",
    roleID: "123",
    hotline: "190018123"
}

const client: ClientAccount = {
    fullName: "Le Van A",
    email: "levana@gmail.com",
    phone: "123345",
    password: '123',
    score: 'asdfasdfzxkcjlhv',
    average: 12
}
