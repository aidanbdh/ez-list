const React = require('react')
const { connect } = require('react-redux')

const helloWorld = ({ text }) => <h1>{ text }</h1>

const mapStateToProps = ({ switchView }) => ({ text: switchView.text })

module.exports = connect(mapStateToProps)(helloWorld)
