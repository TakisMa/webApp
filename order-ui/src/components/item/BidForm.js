import React from 'react'
import { Form, Button, Icon } from 'semantic-ui-react'


function BidForm({ itemId, itemCurrently, handleInputChange, handleUpdateBid }) {
  const createBtnDisabled = false//= (itemName.trim() === '' || itemCategory.trim() === '' || bidAmount == '' || itemDescription.trim() === '')
  let bidAmount
  return (
    <Form onSubmit={() => handleUpdateBid(itemId, itemCurrently)} >
      <Form.Group>
        <Form.Input
          name='bidAmount'
          placeholder='Your Bid'
          value={bidAmount}
          onChange={handleInputChange}
        />

        <Button icon labelPosition='right' disabled={createBtnDisabled}>
          Bid <Icon name='add' />
        </Button>
      </Form.Group>
    </Form >
  )
}

export default BidForm