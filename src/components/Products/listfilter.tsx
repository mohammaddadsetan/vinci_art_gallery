import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

export default function InteractiveList() {
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
    return (
        <List dense={dense}>

            <ListItem
            disablePadding
            
                secondaryAction={
                    <Checkbox
                        edge="end"
                        color='default'
                    />
                }
            >
                <ListItemButton
                disableGutters
                >

                    <ListItemText
                    
                        primary="Musics"

                    />
                </ListItemButton>
            </ListItem>
            <ListItem
            disablePadding
                secondaryAction={
                    <Checkbox
                        edge="end"
                        color='default'
                    />
                }
            >
                <ListItemButton disableGutters>
                    <ListItemText
                        primary="Paints"

                    />
                </ListItemButton>
            </ListItem>
            <ListItem
            disablePadding
                secondaryAction={
                    <Checkbox
                        edge="end"
                        color='default'
                    />
                }
            >
                <ListItemButton disableGutters>
                    <ListItemText
                        primary="Sculptures"

                    />
                </ListItemButton>
            </ListItem>
            <ListItem
            disablePadding
            divider
                secondaryAction={
                    <Checkbox
                        edge="end"
                        color='default'
                    />
                }
            >
                <ListItemButton disableGutters>
                    <ListItemText
                        primary="Crafts"

                    />
                </ListItemButton>
            </ListItem>
        </List>
    )
}