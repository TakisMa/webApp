import React, { Component } from 'react'
import { Statistic, Icon, Grid, Container, Segment, Dimmer, Loader, GridColumn } from 'semantic-ui-react'
import { itemApi } from '../api/ItemApi'
import { handleLogError } from '../misc/Helpers'
import AuctionTable from './AuctionTable'

class Home extends Component {
  state = {
    isLoading: false,
    items: null
  }

  async componentDidMount() {
    this.handleGetItems()
  }

  handleGetItems = () => {
    this.setState({ isLoading: true})
    itemApi.getAllItems()
      .then(response => {
        this.setState({ items: response.data })
      })
      .catch(error => {
        handleLogError(error)
      })
      .finally(() => {
        this.setState({ isLoading: false})
      })
  }

  render() {
    const { items, isLoading } = this.state

    if (isLoading) {
      return (
        <Segment basic style={{ marginTop: window.innerHeight / 2 }}>
          <Dimmer active inverted>
            <Loader inverted size='huge'>Loading</Loader>
          </Dimmer>
        </Segment>
      )
    } else {
      return (
        <Container text maxWidth="sm">
          <Grid>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                Auctions
              </Grid.Column>
            </Grid.Row>
          </Grid>
             

          <Grid text>
            <Grid.Row >
              <GridColumn textAlign='center'>
                <Segment color='violet' >
                 <AuctionTable 
                    items={items}
                  />   
                </Segment>
              </GridColumn>
            </Grid.Row>
          </Grid>
        </Container>
      )
    }
  }
}

export default Home