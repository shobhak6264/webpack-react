import axios from 'axios'

function generateRandomBank() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  axios.get('https://random-data-api.com/api/bank/random_bank').then((res) => {
    console.log(res)
    document.getElementById('joke').innerHTML = res.data.bank_name
  })
}

export default generateRandomBank
