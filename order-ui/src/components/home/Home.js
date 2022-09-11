import React, { Component } from 'react'
import { Statistic, Icon, Grid, Container, Image, Segment, Dimmer, Loader, GridColumn, StatisticValue, StatisticLabel } from 'semantic-ui-react'
import { orderApi } from '../misc/OrderApi'
import { handleLogError } from '../misc/Helpers'

class Home extends Component {
  state = {
    numberOfUsers: 0,
    numberOfOrders: 0,
    isLoading: false,
  }

  async componentDidMount() {
    this.setState({ isLoading: true })
    try {
      let response = await orderApi.numberOfUsers()
      const numberOfUsers = response.data

      response = await orderApi.numberOfOrders()
      const numberOfOrders = response.data

      this.setState({ numberOfUsers, numberOfOrders })
    } catch (error) {
      handleLogError(error)
    } finally {
      this.setState({ isLoading: false })
    }
  }

  render() {
    const { isLoading } = this.state
    if (isLoading) {
      return (
        <Segment basic style={{ marginTop: window.innerHeight / 2 }}>
          <Dimmer active inverted>
            <Loader inverted size='huge'>Loading</Loader>
          </Dimmer>
        </Segment>
      )
    } else {
      const { numberOfUsers, numberOfOrders } = this.state
      return (
        <Container text>
          <Grid stackable columns={2}>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Segment color='violet'>
                  <Statistic>
                    <Statistic.Value><Icon name='user' color='grey' />{numberOfUsers}</Statistic.Value>
                    <Statistic.Label>Users</Statistic.Label>
                  </Statistic>
                </Segment>
              </Grid.Column>
              <Grid.Column textAlign='center'>
                <Segment color='violet'>
                  <Statistic>
                    <Statistic.Value><Icon name='laptop' color='grey' />{numberOfOrders}</Statistic.Value>
                    <Statistic.Label>Orders</Statistic.Label>
                  </Statistic>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Grid text>
            <Grid.Row >
              <GridColumn textAlign='center'>
                <Segment color='violet' >
                  
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