import React from 'react'

// MUI Core
import List from '@mui/material/List'
import MuiListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'

const DefaultListItem = ( { 
  key,
  primary,
  secondary,
  secondaryActions
} ) => (
    <MuiListItem
      key={key}
      secondaryAction={secondaryActions}
    >
      <ListItemButton>
        <ListItemText
          primary={primary}
          secondary={secondary}
        />
      </ListItemButton>
    </MuiListItem>
)

const DocumentList = ( {
  list: parsedList = [],
  ListItem = DefaultListItem,
  handleFetch,
  transformData,
  secondaryActions,
  dense = true,
} ) => {

  let list = parsedList

  if( transformData ) {
    list = transformData( parsedList )
  }

  // TODO: Refactor keys to be more generic. i.e primary, secondary, etc
  return (
    <List dense={dense}>
      { list.map( ( { name, fileStorageName, downloadURL }, index ) => (
        <ListItem 
          key={index}
          primary={name}
          secondaryActions={ secondaryActions && secondaryActions( { name, fileStorageName, downloadURL } ) }
        />
      ) ) }
    </List>
  )
}

export default DocumentList