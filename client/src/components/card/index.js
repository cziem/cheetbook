import React, { Component } from 'react'
import { Card, CardHeader, CardMedia, CardActionArea, CardActions, CardContent, Button } from '@material-ui/core';

const CardContainer = () => (
    <Card style={styles.cardStyle}>
        <CardActionArea>
            <CardMedia 
                image="/client/src/images/react.png"
                title="React Logo"
            />
            <CardContent>
                <h3>
                    This is the header
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <CardActions>
                <Button>View Sheet</Button>
            </CardActions>
        </CardActions>
    </Card>
);

const styles = {
    cardStyle: {
        maxWidth: "20rem",
        textAlign: "center",
        padding: "10px"
    }
}

export default CardContainer;