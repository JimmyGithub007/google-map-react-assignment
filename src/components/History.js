import { Card, Collapse, Grow, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AccessTimeFilled, Delete, NearMe, Place } from '@mui/icons-material';
import { TransitionGroup } from 'react-transition-group';
import { removeHistory, setPlace } from '../store/slice/placesSlice';

import React from 'react';
import styled from '@emotion/styled';

const MuiCard = styled(Card)({
    borderRadius: "15px",
    marginBottom: "10px",
});

const MuiDiv = styled("div")({
    padding: "0 20px"
});

const MuiSpan = styled("span")({
    display: "flex",
    alignItems: "center",
    gap: "5px",
});

const History = () => {
    const { history } = useSelector(state => state.places);
    const dispatch = useDispatch();

    return (<Grow in={true}>
        <MuiDiv>
            <List>
                <TransitionGroup component={null}>
                    {
                        history.map((item, key) => (<Collapse key={item.time}>
                            <MuiCard>
                                <ListItem
                                    secondaryAction={<React.Fragment>
                                        <IconButton color="primary" onClick={() => dispatch(setPlace({
                                            lat: item.location.lat, lng: item.location.lng
                                        }))}>
                                            <NearMe />
                                        </IconButton>
                                        <IconButton color="error" onClick={() => dispatch(removeHistory(key))}>
                                            <Delete />
                                        </IconButton>
                                    </React.Fragment>}
                                >
                                    <ListItemText
                                        primary={item.address}
                                        secondary={<React.Fragment>
                                            <MuiSpan><AccessTimeFilled /> {item.time}</MuiSpan>
                                            <MuiSpan><Place />Lat: {item.location.lat + ' Lng: ' + item.location.lng}</MuiSpan>
                                        </React.Fragment>}
                                    />
                                </ListItem>
                            </MuiCard>
                        </Collapse>))
                    }
                </TransitionGroup>
                {history.length === 0 && <Typography variant="h6" sx={{ color: "gray", textAlign: "center" }}>Sorry, no record were found.</Typography>}
            </List>
        </MuiDiv>    
    </Grow>)
}

export default History;