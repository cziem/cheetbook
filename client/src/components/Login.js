import React, { Component } from 'react';
import { Card, Typography, CardActions, CardContent, Grid, Tabs, Tab, Button, Input } from '@material-ui/core';

class Login extends Component {
    state = {
        value: 0,
      };
    
      handleChange = (event, value) => {
        this.setState({ value });
      };
    render() {
        return(
            <Grid container justify="center">
                <Card style={styles.cardStyle}>
                    <CardContent>
                        <Tabs
                            value={this.state.value}
                            indicatorColor="primary"
                            textColor="white"
                            onChange={this.handleChange}
                        >
                            <Tab label="Login" style={styles.tabStyle} />
                            <Tab label="Sign Up" style={styles.tabStyle} />
                        </Tabs>
                        <Grid container style={{ paddingTop:'50' }}>
                            <Grid item>
                                <CardActions>
                                    <Button variant="outlined" size="medium" style={styles.buttonStyle}>
                                        Google
                                    </Button>
                                </CardActions>  
                            </Grid>
                            <Grid item>
                                <CardActions>
                                    <Button variant="outlined" size="medium" style={styles.buttonStyle}>
                                        GitHub
                                    </Button>
                                </CardActions>  
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12}>
                                <Input
                                    placeholder="username"
                                    inputProps={{
                                    'aria-label': 'Description',
                                    }}
                                    fullWidth
                                    style={styles.inputStyle}
                                />
                            </Grid>
                            <Grid item  xs={12}>
                                <Input
                                    placeholder="password"
                                    inputProps={{
                                    'aria-label': 'Description',
                                    }}
                                    type="password"
                                    fullWidth
                                    style={styles.inputStyle}
                                />
                            </Grid>
                        </Grid>
                        <Grid container justify='center'>
                            <CardActions>
                                <Button variant='outlined' style={styles.buttonStyle}>Login</Button>
                            </CardActions>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        )
    }
}

const styles = {
    cardStyle: {
        backgroundColor: '#18324f',
        color: 'white'
    },
    buttonStyle:{
        borderColor: '#3dc0cb',
        color: '#3dc0cb',
        fontWeight: 'bold'
    },
    tabStyle: {
        color: '#3dc0cb',
        fontWeight: 'bold'
    },
    inputStyle: {
        color: 'white',
        borderColor: '#3dc0cb'
    }
}

export default Login;