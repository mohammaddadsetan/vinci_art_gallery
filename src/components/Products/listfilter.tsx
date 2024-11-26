import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import RangeSlider from './priceSlider';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from 'react-router-dom';

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
                        color='warning'
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
                        color='warning'
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
                        color='warning'
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
                        color='warning'
                    />
                }
            >
                <ListItemButton disableGutters>
                    <ListItemText
                        primary="Crafts"

                    />
                </ListItemButton>
            </ListItem>
            <RangeSlider />
            <ButtonGroup
                orientation="vertical"
                aria-label="Vertical button group"
                variant="text"
                fullWidth
                color='inherit'
                size='large'
            >
                <Button href='./products/paints/vanGogh' key="Musics">Musics</Button>,
                <Button key="Paints">Paints</Button>,
                <Button key="Sculptures">Sculptures</Button>,
                <Button key="Photos">Photos</Button>,
                <Button key="Crafts">Crafts</Button>,
            
            </ButtonGroup>

        </List>

    )
}