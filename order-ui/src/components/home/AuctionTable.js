import React from 'react'
import { Table } from 'semantic-ui-react'

export default function AuctionTable({items}) {
  let itemList
  if (!items || items.length === 0) {
    itemList = (
      <Table.Row key='no-item'>
        <Table.Cell collapsing textAlign='center' colSpan='8'>No Item</Table.Cell>
      </Table.Row>
    )
  } else {
    itemList = items.map(item => {
      return (
        <Table.Row key={item.id}>
          {/* <Table.Cell>{item.id}</Table.Cell> */}
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
      <Table compact striped selectable >
        <Table.Header>
          <Table.Row>
            {/* <Table.HeaderCell width={3}>ID</Table.HeaderCell> */}
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
