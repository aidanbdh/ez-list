const React = require('react')
const { connect } = require('react-redux')
const {  } = require('semantic-ui-react')
const { getInventory, addInventory } = require('../../actions/inventory.js')

const Inventory = ({ items, get, add }) => {
  get()
  return <div>
    <div className="half-page">

    </div>
    <div className="half-page">

    </div>
  </div>

}

const mapDispatchToProps = dispatch => ({
  get: () => dispatch(getInventory()),
  add: () => dispatch(addInventory())
})

const mapStateToProps = ({ inventory }) => ({ items: inventory.items })

module.exports = connect(mapStateToProps, mapDispatchToProps)(Inventory)
