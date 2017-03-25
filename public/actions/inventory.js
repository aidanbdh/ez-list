const getInventory = email =>
  dispatch => {
    fetch('/inventory', {
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      method: 'GET',
      body: JSON.stringify({ email })
    })
      .then(items => {
        dispatch({
          type: 'showInventory',
          items
        })
      })
  }

const addInventory = (email, name, price = 0, location = null) =>
  dispatch => {
    fetch('/inventory', {
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ email, name, price, location })
    })
      .then(item => {
        dispatch({
          type: 'addInventory',
          item
        })
      })
  }

module.exports = { getInventory, addInventory }
