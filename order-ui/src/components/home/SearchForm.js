import _ from 'lodash'
import React from 'react'
import { Form } from 'semantic-ui-react'
import { useState } from 'react'

function SearchForm({ items }) {

  const [searchTerm, setSearchTerm] = useState('')


  return (
    <Form>
      <Form.Input
        icon='search icon'
        placeholder='Search' type='text'
        onChange={(e) => {
          setSearchTerm(e.target.value)
        }}
      />
      {items.filter((val) => {
        if(searchTerm == '') {
          return val
        } else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())) {

        }

      }).map((val, key) => {
        return (
          <div key={key}>
            {val}
          </div>
        )
      })
      }
    </Form>
  )
}

export default SearchForm