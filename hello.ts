
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



// interface User {
//     fullName: String,
//     email?: String,
//     age?: Number
// }

// const arrayObject: User[] = []

// const user1: User = {
//     fullName: "Tran Vu Hoang",
//     email: "email@gmail.com",
//     age: 20
// }

// const user2: User = {
//     fullName: "Tran Thu Trang",
//     age: 21
// }



// arrayObject.push(user1)
// arrayObject.push(user2)


// 8. Kiểu Tuple
//     Tuple giống như một mảng, nhưng:
//         + Số lượng phần tử trong tuple là cố định
//         + Types của các phần tử trong mảng được chỉ định và không cần giống nhau

// let inforUser: [String, Number, String]

// inforUser = ['Nguyen Van A', 12, "Tran Vu Hoang"]


// let clock: [Number, Number, Number]

// clock = [12, 59, 23]

// const [hours, minutes, seconds] = clock
// console.log(`Bây giờ là ${hours} giờ ${minutes} phút ${seconds} giây`)

// 9. Kiểu readonly
//     + Từ khóa readonly được sử dụng để chỉ định rằng một biến hoặc thuộc tính không thể được gán lại sau khi nó đã được khởi tạo

// interface User {
//     readonly fullName: String,
//     email: String,
//     age?: Number
// }

// const user1: User = {
//     fullName: "Tran Vu Hoang",
//     email: "hoang250203@gmail.com",
//     age: 12
// }

// console.log(user1)

// // 10. Function
// function sum(a: number, b: number): number {
//     return (a + b);
// }
// let result = sum(10, 20)
// console.log(result)


// const sum1 = (a: number, b: number): number => {
//     return a + b
// }

// // 11.Default parameters
// const sum = (a: number = 0, b: number = 0): number => {
//     return a + b;
// }

// // 12.Rest parameters
// const sum = (...numbers: number[]) => {
//     const total = numbers.reduce((sum, item) => sum + item, 0)
//     return total
// }

// const res = sum(10, 20, 30, 40, 50)
// console.log(res)

// 13. Enum
//     + Liệt kê một nhóm các giá trị constant
// SAMPLE 1:
// enum Status {
//     INITAL, // 0
//     ACTIVE, // 1
//     INACTIVE // 2
// }
// const statusCurrent: number = 2

// switch (statusCurrent) {
//     case Status.INITAL:
//         console.log("Đang khởi động")
//     case Status.ACTIVE:
//         console.log("Đang hoat động")
//         break;
//     case Status.INACTIVE:
//         console.log("Dung khởi động")
//         break;
//     default:
//         break;
// }


// // SAMPLE 2:
// enum Status {
//     INITAL = "inital", // 0
//     ACTIVE = 'active', // 1
//     INACTIVE = 'inactive'// 2
// }
// const statusCurrent: string = "active"

// switch (statusCurrent) {
//     case Status.INITAL:
//         console.log("Đang khởi động")
//     case Status.ACTIVE:
//         console.log("Đang hoat động")
//         break;
//     case Status.INACTIVE:
//         console.log("Dung khởi động")
//         break;
//     default:
//         break;
// }

// // 14. Kiểu any
// // + Giúp linh họat thay đổi các kiểu dữ liệu của 1 biến
// let a: any = 20
// a = 'Le Van A'

// console.log(a)

// 15. Unknow
// + Giúp thay đổi linh hoạt kiểu dữ liệu của 1 biến
// + Nhưng an toàn hơn
// + Kiểu any KHÔNG yêu cầu kiểm tra dữ liệu trước khi sử dụng giá trị -> Khi gặp lỗi không hiển thị thông báo
// + Kiểu unknow CÓ yêu cầu kiểm tra dữ liệu trước khi sử dụng giá trị -> Khi gặp lỗi có hiển thị thông báo

// let a: unknown;
// a = 12
// a = "le Van A"
// console.log(a)


