import React from 'react'
import { Grid, Table, Header, Icon } from 'semantic-ui-react'
import ItemForm from '../misc/ItemForm'


function ItemTable({ items, itemName, itemCategory, itemCurrently, itemBuyPrice, itemDescription, handleInputChange, handleCreateItem }) {
  let itemList
  if (!items || items.length === 0) {
    itemList = (
      <Table.Row key='no-item'>
        <Table.Cell collapsing textAlign='center' colSpan='3'>No Item</Table.Cell>
      </Table.Row>
    )
  } else {
    itemList = items.map(item => {
      return (
        <Table.Row key={item.id}>
          <Table.Cell>{item.id}</Table.Cell>
          <Table.Cell>{item.name}</Table.Cell>
          <Table.Cell>{item.category}</Table.Cell>
          <Table.Cell>{item.currently}</Table.Cell>
          <Table.Cell>{item.buyPrice}</Table.Cell>
          <Table.Cell>{item.started}</Table.Cell>
          <Table.Cell>{item.description}</Table.Cell>
        </Table.Row>
      )
    })
  }

  return (
    <>
      <Grid stackable divided>
        <Grid.Row columns='2'>
          <Grid.Column width='3'>
            <Header as='h2'>
              <Icon name='laptop' />
              <Header.Content>Items</Header.Content>
            </Header>
          </Grid.Column>
          <Grid.Column>
            <ItemForm
              itemName={itemName}
              itemCategory={itemCategory}
              itemCurrently={itemCurrently}
              itemBuyPrice={itemBuyPrice}
              itemDescription={itemDescription}
              handleInputChange={handleInputChange}
              handleCreateItem={handleCreateItem}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Table compact striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={3}>ID</Table.HeaderCell>
            <Table.HeaderCell width={3}>Name</Table.HeaderCell>
            <Table.HeaderCell width={3}>Category</Table.HeaderCell>
            <Table.HeaderCell width={3}>Bid</Table.HeaderCell>
            <Table.HeaderCell width={3}>Buy Price</Table.HeaderCell>
            <Table.HeaderCell width={3}>Created At</Table.HeaderCell>
            <Table.HeaderCell width={4}>Description</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {itemList}
        </Table.Body>
      </Table>
    </>
  )
}

export default ItemTable