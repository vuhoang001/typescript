
// // String 
// let a: string = "xin chao !"


// //object 

// const user: {
//     fullName: string,
//     email: String,
//     age: Number
// } = {
//     fullName: "Tran Vu Hoang",
//     email: "vuhoang250203@gmail.com",
//     age: 12
// }

// // console.log(user)

// // 5.Interface 
// interface User {
//     fullName: String,
//     email: String,
//     age?: Number,
//     socials?: {
//         zalo: String,
//         facebook: String
//     }
// }

// let detail: User = {
//     fullName: "Tran Vu Hoang",
//     email: "Vuhoang250203@gmail.com",
//     age: 11,
//     socials: {
//         zalo: "zalo.com",
//         facebook: "facebook.com"
//     }
// }
// // console.log(detail)

// // 6. Extend interface  
// interface Account {
//     fullName: String,
//     email: String,
//     phone: String,
//     password: String
// }

// interface AdminAccount extends Account {
//     roleID: String,
//     hotline: String
// }

// interface ClientAccount extends Account {
//     score: String,
//     average: Number
// }

// const admin: AdminAccount = {
//     fullName: "Le Van A",
//     email: "levana@gmail.com",
//     phone: "123345",
//     password: "hoang",
//     roleID: "123",
//     hotline: "190018123"
// }

// const client: ClientAccount = {
//     fullName: "Le Van A",
//     email: "levana@gmail.com",
//     phone: "123345",
//     password: '123',
//     score: 'asdfasdfzxkcjlhv',
//     average: 12
// }

// // console.log(admin)
// // console.log(client)

// // 7. Kiểu array 
// const array: number[] = []

// array.push(1)
// array.push(2)
// array.push(3)

// // console.log(array)

// const arrayString: (String | Number)[] = ["Tran Vu Hoang", 20, 'vuhoang250203@gmail.com']


// arrayString.push('A')
// arrayString.push('B')
// arrayString.push('C')



interface User {
    fullName: String,
    email?: String,
    age?: Number
}

const arrayObject: User[] = []

const user1: User = {
    fullName: "Tran Vu Hoang",
    email: "email@gmail.com",
    age: 20
}

const user2: User = {
    fullName: "Tran Thu Trang",
    age: 21
}



arrayObject.push(user1)
arrayObject.push(user2)


