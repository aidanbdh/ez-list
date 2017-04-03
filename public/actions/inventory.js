const getInventory = email =>
  dispatch => {
    fetch('/inventory?email=' + email, {
      /* headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      }, */
      method: 'GET'
    })
      .then(items => {
        console.log(items)
        dispatch({
          type: 'showInventory',
          items
        })
      })
  }

const addInventory = (email, item) =>
  dispatch => {
    fetch('/inventory', {
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(Object.assign(item, { email }))
    })
      .then(item => {
        dispatch({
          type: 'addInventory',
          item
        })
      })
  }

const editInventory = (email, oldItem, item) =>
  dispatch => {
    fetch('/inventory', {
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify({ email, oldItem, item })
    })
      .then(item => {
        dispatch({
          type: 'editInventory',
          oldItem,
          item
        })
      })
  }

const removeInventory = (email, item) =>
  dispatch => {
    fetch('/inventory', {
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      method: 'DELETE',
      body: JSON.stringify({ email, item })
    })
      .then(item => {
        dispatch({
          type: 'removeInventory',
          item
        })
      })
  }

module.exports = { getInventory, addInventory, editInventory, removeInventory }
