import React from 'react'
import { Table, Form, Grid } from 'semantic-ui-react'
import BidForm from '../item/BidForm'


export default function AuctionTable({ items, searchTerm, isUser, handleUpdateBid, handleInputChange }) {

  let itemList
  if (!items || items.length === 0) {
    itemList = (
      <Table.Row key='no-item'>
        <Table.Cell collapsing textAlign='center' colSpan='8'>No Item</Table.Cell>
      </Table.Row>
    )
  } else {
    itemList = items
      .filter((item) => {
        return item.category.toLowerCase().includes(searchTerm.toLowerCase())
      })
      .map(item => {
        if (isUser) {
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
              <Table.Cell>
                <BidForm
                  itemId={item.id}
                  itemCurrently={item.currently}
                  handleUpdateBid={handleUpdateBid}
                  handleInputChange={handleInputChange}
                />
              </Table.Cell>
            </Table.Row>
          )
        }
        else {
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
        }
      })
  }


  return (
    <>
      <Grid>
        <Form>
          <Form.Input
            name='searchTerm'
            value={searchTerm}
            icon='search'
            placeholder='Search by Category'
            type='text'
            onChange={handleInputChange}
          />
        </Form>
      </Grid>



      <Table compact striped selectable >
        <Table.Header>
          <Table.Row>
            {/* <Table.HeaderCell width={3}>ID</Table.HeaderCell> */}
            <Table.HeaderCell width={3}>Name</Table.HeaderCell>
            <Table.HeaderCell width={3}>Category</Table.HeaderCell>
            <Table.HeaderCell width={2}>Highest Bid</Table.HeaderCell>
            <Table.HeaderCell width={2}>Buy Price</Table.HeaderCell>
            <Table.HeaderCell width={4}>Started</Table.HeaderCell>
            <Table.HeaderCell width={4}>Ends</Table.HeaderCell>
            <Table.HeaderCell width={3}>Description</Table.HeaderCell>
            <Table.HeaderCell ></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {itemList}
        </Table.Body>
      </Table>
    </>
  )
}
