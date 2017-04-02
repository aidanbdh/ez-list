const React = require('react')
const { connect } = require('react-redux')
const { getInventory, addInventory, editInventory, deleteInventory } = require('../../../actions/inventory.js')
const Item = require('./card.js')

const Inventory = ({ items, email, get, add, edit, del }) => {
  get(email)
  return <div>
    <div id="inventory-list" className="half-page">
      { Item(email, items, edit, del) }
    </div>
    <div className="half-page">

    </div>
  </div>

}

const mapDispatchToProps = dispatch => ({
  get: email => dispatch(getInventory(email)),
  add: (email, item) => dispatch(addInventory(email, item)),
  edit: (email, oldItem, item) => dispatch(editInventory(email, oldItem, item)),
  del: (email, item) => dispatch(deleteInventory(email, item))
})

const mapStateToProps = ({ inventory, profile }) => {
  return {
    items: inventory.items,
    email: profile.user.email
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Inventory)
