import React, { Component } from 'react'
import { Statistic, Icon, Grid, Container, Segment, Dimmer, Loader, GridColumn } from 'semantic-ui-react'
import { itemApi } from '../api/ItemApi'
import AuthContext from '../context/AuthContext'
import { handleLogError } from '../misc/Helpers'
import AuctionTable from './AuctionTable'

class Home extends Component {
  static contextType = AuthContext

  state = {
    isUser: false,
    isLoading: false,
    items: null, 
    bidAmount: ''
  }

  async componentDidMount() {
    this.handleGetItems()

    const Auth = this.context
    const user = Auth.getUser()
    const isUser = user.data.rol[0] === 'USER'
    this.setState({ isUser })
  }

  handleInputChange = (e, { name, value }) => {
    this.setState({ [name]: value })
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

  handleUpdateBid = (itemId) => {
    this.setState({isLoading: true})
    const Auth = this.context
    const user = Auth.getUser()

    let { bidAmount } = this.state
    
    const newBid = {
      itemId: itemId,
      newAmount: bidAmount
    }
    itemApi.updateBid(user, newBid)
      .then(() => {
        this.handleGetItems()
        this.setState({
          isLoading:false
        })
      })
      .catch((error) => {
        handleLogError(error)
      })

  }

  render() {
    const { items, isUser, isLoading } = this.state

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
        <Container>
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
                    isUser={isUser}
                    handleUpdateBid={this.handleUpdateBid}
                    handleInputChange={this.handleInputChange}
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