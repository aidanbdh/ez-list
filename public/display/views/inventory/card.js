const React = require('react')
const { Card, Icon } = require('semantic-ui-react')

const Item = (email, items, remove) =>
  <div>
    {
      items.map(item =>
        <Card>
          <Card.Content>
            <div>
              <Icon name="write" floated="right"/>
              <Icon name="delete" floated="right" onClick={ remove(email, item) }/>
              <Card.Description>
                item.name
              </Card.Description>
            </div>
            <div>
              <Card.Description>
                `$${item.price}`
              </Card.Description>
              <Card.Meta>
                item.location
              </Card.Meta>
            </div>
          </Card.Content>
        </Card>
      )
    }
  </div>

module.exports = Item
