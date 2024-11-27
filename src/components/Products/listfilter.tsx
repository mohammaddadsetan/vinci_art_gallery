import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import RangeSlider from './priceSlider';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import { Divider } from '@mui/material';
import Inputbox from "../Inputbox"
import SearchIcon from '@mui/icons-material/Search';
export default function InteractiveList() {
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
    return (
        <List dense={dense}>
            <Inputbox placeholder={"Search..."} typ={"search"} color={"black"} icon={<SearchIcon />} />
            <ButtonGroup
            sx={{padding:" 2em 0 0em 0"}}
                orientation="vertical"
                aria-label="Vertical button group"
                variant="text"
                fullWidth
                color='inherit'
                size='large'
            >
                <Button href='./products/musics' key="Musics">Musics</Button>,
                <Button key="Paints">Paints</Button>,
                <Button key="Sculptures">Sculptures</Button>,
                <Button key="Photos">Photos</Button>,
                <Button key="Crafts">Crafts</Button>,
                
            </ButtonGroup>

            <RangeSlider />
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

        </List>

    )
}