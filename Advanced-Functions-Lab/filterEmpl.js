function filterEmployees(data, criteria) {
    const parsed = JSON.parse(data);
    const [type, value] = criteria.split('-');

    const newArr = parsed.reduce((acc, curr) => {
        if (curr[type] === value) {
            acc.push(curr);
        }
        return acc;
    }, []);

    for (let i = 0; i < newArr.length; i++) {
      const firstName = newArr[i]['first_name'];
      const lastName = newArr[i]['last_name'];
      const email = newArr[i]['email'];

      console.log(`${i}. ${firstName} ${lastName} - ${email}`);
    }
}

filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female'
)

filterEmployees(`[{
  "id": "1",
  "first_name": "Kaylee",
  "last_name": "Johnson",
  "email": "k0@cnn.com",
  "gender": "Female"
}, {
  "id": "2",
  "first_name": "Kizzee",
  "last_name": "Johnson",
  "email": "kjost1@forbes.com",
  "gender": "Female"
}, {
  "id": "3",
  "first_name": "Evanne",
  "last_name": "Maldin",
  "email": "emaldin2@hostgator.com",
  "gender": "Male"
}, {
  "id": "4",
  "first_name": "Evanne",
  "last_name": "Johnson",
  "email": "ev2@hostgator.com",
  "gender": "Male"
}]`,
'last_name-Johnson'

)