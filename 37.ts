// // 1. Void type
// const hello = (fullName: String): void => {
//     console.log(`Hello ${fullName}!`)
// }

// hello('Hoang')


// 2. Generics
// Example 1: No generics
// 1.1: Return number
// const reverseArray = (array: number[]): number[] => {
//     return array.reverse()
// }

// const a = reverseArray([12, 13, 15])
// console.log(a)
// 1.2: Return string
// const reverseArray = (array: string[]): string[] => {
//     return array.reverse()
// }

// const a = reverseArray(['12', '13', '15'])
// console.log(a)
// Example 2: Generics
// const reverseArray = <T>(array: T[]): T[] => {
//     return array.reverse()
// }

// const a = reverseArray([12, 13, 14])
// const b = reverseArray(['12', '13', '14'])
// console.log(a)
// console.log(b)


// 3. Union type
// + Kết hợp nhiều kiểu
// interface task {
//     id: string,
//     title: string,
//     content: string,
//     rating: number | string,
//     status: 'initial' | "doing" | 'pending' | 'finish' | 'not finish'
// }

// const product: task = {
//     id: '123',
//     title: "hoang",
//     content: "hoang",
//     rating: 12,
//     status: 'doing'
// }

// console.log(product)


// 4. type alias

// type ratingType = number | string
// type statusType = 'inactive' | 'active' | 'locked'
// interface product {
//     title: string,
//     content: string,
//     rating: ratingType,
//     status: statusType
// }


// 5. Intersection type (Hợp 2 interface thành 1)
// interface Account {
//     readonly id: string,
//     fullName: string,
//     age?: number
// }

// interface Contact {
//     hotLine: String,
//     email?: string
// }

// interface Social {
//     zalo?: string,
//     facebook?: string,
//     tiktok?: string
// }

// type accountContact = Account & Contact

// const a: accountContact = {
//     id: "id",
//     fullName: "hoang",
//     hotLine: "0989289758",
// }

// console.log(a)


// 6. Declaration merging (Hợp 2 interface thành 1)
// interface User {
//     id: string,
//     fullName: string
// }

// interface User {
//     email: string,
//     phone: string
// }

// const user1: User = {
//     id: 'id',
//     fullName: "Vu Hoang",
//     email: "email",
//     phone: "phone"
// }

// console.log(user1)

// 7. Partial<type>
// + Thay đổi tất cả các thuộc tính trong đối tượng thành tùy chọn (optional)
// interface User {
//     id: string,
//     fullName: string,
//     phone: string
// }

// let user1: User = {
//     id: "123",
//     fullName: "hoang",
//     phone: "123"
// }

// const user2: Partial<User> = {
//     id: '123'
// }

// console.log(user2)

// 7. required<type>
// + Thay đổi tất cả các thuộc tính trong đối tượng thành bắt buộc (optional)
// interface User {
//     id?: string,
//     fullName?: string,
//     phone?: string
// }

// let user1: User = {
//     id: "123",
//     fullName: "hoang",
//     phone: "123"
// }

// const user2: Required<User> = {
//     id: '123'
// }

// console.log(user2)


// 7. Pick<Type, Keys>
// Pick<Type, key | key>
// + Xóa tất cả các thuộc tính ra khỏi đối tượng ngoài trừ các thuộc tính được giữ lại.

// 8. Omit<Type, Keys>
// + Xóa các thuộc tính key ra khỏi đối tượng

// 9. Readonly<Type>
// + Tất cả thuộc tính chỉ đọc không được thay đổi 