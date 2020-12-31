const { fake } = require('faker')
const faker = require('faker')
function generateCustomers () {
  var customers = []
  var week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  for (let i = 0; i < 2; i++) {
    var productName = faker.name.firstName()
    let datas = []
    for (var id = 0; id < week.length; id++) {
      var price = faker.commerce.price()
      datas.push({
        "id": id,
        "price": price,
        "week": week[id]
      })
    }
    customers.push({
      "id": i,
      "name": productName,
      "datas": datas
    })
  }
  return { "customers": customers }
}
[
  {
    name: "name",
    datas: [

    ]
  }
]

// 如果你要用json-server的话，就需要export这个生成fake data的function
module.exports = generateCustomers