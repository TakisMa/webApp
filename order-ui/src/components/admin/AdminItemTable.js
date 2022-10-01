import React from 'react'
import { Table, Button, Form, Input } from 'semantic-ui-react'

export default function AdminItemTable({ items, handleDeleteItem, itemCategorySearch, handleInputChange }) {

  let itemList
  if (!items || items.length === 0) {
    itemList = (
      <Table.Row key='no-item'>
        <Table.Cell collapsing textAlign='center' colSpan='9'>No Item</Table.Cell>
      </Table.Row>
    )
  } else {
    itemList = items
      .filter((item) => {
        return item.category.toLowerCase().includes(itemCategorySearch.toLowerCase())
      })
      .map(item => {
        return (
          <Table.Row key={item.id}>
            <Table.Cell collapsing>
              <Button
                circular
                color='red'
                size='small'
                icon='trash'
                onClick={() => handleDeleteItem(item.id)}
              />
            </Table.Cell>
            <Table.Cell>{item.id}</Table.Cell>
            <Table.Cell>{item.name}</Table.Cell>
            <Table.Cell>{item.category}</Table.Cell>
            <Table.Cell>{item.currently}</Table.Cell>
            <Table.Cell>{item.buyPrice}</Table.Cell>
            <Table.Cell>{item.started}</Table.Cell>
            <Table.Cell>{item.ends}</Table.Cell>
            <Table.Cell>{item.description}</Table.Cell>

          </Table.Row>
        )
      })
  }

  return (
    <>
      <Form>
        <Input
          action={{ icon: 'search' }}
          name='itemCategorySearch'
          placeholder='Search by Username'
          value={itemCategorySearch}
          onChange={handleInputChange}
        />
      </Form>
      <Table compact striped selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={1}></Table.HeaderCell>
            <Table.HeaderCell width={3}>ID</Table.HeaderCell>
            <Table.HeaderCell width={2}>Name</Table.HeaderCell>
            <Table.HeaderCell width={2}>Category</Table.HeaderCell>
            <Table.HeaderCell width={1}>Bid</Table.HeaderCell>
            <Table.HeaderCell width={1}>Buy Price</Table.HeaderCell>
            <Table.HeaderCell width={3}>Started</Table.HeaderCell>
            <Table.HeaderCell width={3}>Ends</Table.HeaderCell>
            <Table.HeaderCell width={3}>Description</Table.HeaderCell>

          </Table.Row>
        </Table.Header>
        <Table.Body>
          {itemList}
        </Table.Body>
      </Table>
    </>
  )
}
