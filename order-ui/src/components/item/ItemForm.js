import React from 'react'
import { Form, Button, Icon } from 'semantic-ui-react'


function ItemForm({ itemName, itemCategory, itemCurrently, itemBuyPrice, itemEnds, itemDescription, handleInputChange, handleCreateItem }) {
  const createBtnDisabled = false//= (itemName.trim() === '' || itemCategory.trim() === '' || itemCurrently == '' || itemDescription.trim() === '')
  return (
    <Form onSubmit={handleCreateItem}>
      <Form.Group>
        <Form.Input
          name='itemName'
          placeholder='Name'
          value={itemName}
          onChange={handleInputChange}
        />

        <Form.Input
          name='itemCategory'
          placeholder='Category'
          value={itemCategory}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Input
          name='itemCurrently'
          placeholder='Starting Bid'
          value={itemCurrently}
          onChange={handleInputChange}
        />



        <Form.Input
          name='itemBuyPrice'
          placeholder='Buy Price'
          value={itemBuyPrice}
          onChange={handleInputChange}
        />

        <Form.Input
          name='itemEnds'
          placeholder='Auction Duration'
          value={itemEnds}
          onChange={handleInputChange}
        />


        <Button icon labelPosition='right' disabled={createBtnDisabled}>
          Create<Icon name='add' />
        </Button>
      </Form.Group>
      <Form.TextArea
          name='itemDescription'
          placeholder='Description *'
          value={itemDescription}
          onChange={handleInputChange}
        />
    </Form >
  )
}

export default ItemForm