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
                <Card>
                    <CardContent>
                        <Tabs
                            value={this.state.value}
                            indicatorColor="primary"
                            textColor="primary"
                            onChange={this.handleChange}
                        >
                            <Tab label="Login" />
                            <Tab label="Sign Up" />
                        </Tabs>
                        <Grid container style={{ paddingTop:'50' }}>
                            <Grid item>
                                <CardActions>
                                    <Button variant="outlined" size="medium" color="primary">
                                        Google
                                    </Button>
                                </CardActions>  
                            </Grid>
                            <Grid item>
                                <CardActions>
                                    <Button variant="outlined" size="medium" color="primary">
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
                                />
                            </Grid>
                        </Grid>
                        <Grid container justify='center'>
                            <CardActions>
                                <Button variant='outlined'>Login</Button>
                            </CardActions>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        )
    }
}

export default Login;