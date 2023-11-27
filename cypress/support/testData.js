import { faker } from '@faker-js/faker';


const url = Object.freeze({
    register: '/auth/register',
    smartTable: '/tables/smart-table'
});

const validUserData = Object.freeze({
    name: faker.word.adjective(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.string.alpha(10),
    id: faker.number.int({ max: 256 }),
    userName: faker.internet.userName(),
    age: faker.number.int({ min: 1, max: 100 }),
    fullName: faker.person.fullName()
})

export { url, validUserData };