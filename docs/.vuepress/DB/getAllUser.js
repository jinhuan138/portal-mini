import faker from 'faker';
faker.locale = "zh_CN";
const userNumber = 200
const allUser = new Array(userNumber).fill(true).map(() => {
    const number = faker.datatype.number()
    const { length } = number.toString()
    return {
        id: faker.datatype.uuid().slice(0, 5),
        name: faker.name.findName(),
        roleName: '开发人员',
        statusType: "开启",
        userId: (number + '0').slice(0, 5)
    }
})
export default allUser