import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
        minHeight: '100vh',

    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },


}));

function openUrlInNewTab(url) {
    window.open(url, '_blank');
}

export default function MainContainer() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline/>

            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">

                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Tiago Lopes
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Computer Science | FCT UNL

                        </Typography>

                        <Grid
                            container
                            spacing={0}
                            direction="column"
                            alignItems="center"
                            justify="center"
                        >

                            <Grid item xs={12}>
                                <div className="LI-profile-badge" data-version="v1" data-size="large"
                                     data-locale="en_US"
                                     data-type="horizontal" data-theme="dark" data-vanity="tiago-lopes-b1a268138"><a
                                    className="LI-simple-link"
                                    href='https://pt.linkedin.com/in/tiago-lopes-b1a268138?trk=profile-badge'>Tiago
                                    Lopes</a></div>
                            </Grid>
                        </Grid>


                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <img src="5rfwef.png" height="25px"></img>
                                </Grid>

                            </Grid>
                            <Grid container spacing={2} justify="center">

                                <Grid item>
                                    <Button onClick={() => openUrlInNewTab("cv_en.pdf")} variant="contained"
                                            color="primary">
                                        CV in English
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button onClick={() => openUrlInNewTab("cv_pt.pdf")} variant="contained"
                                            color="primary">
                                        CV em Português
                                    </Button>
                                </Grid>

                            </Grid>
                            <Grid container spacing={2} justify="center">

                                <Grid item>
                                    <Button onClick={() => openUrlInNewTab("https://github.com/oldspice7")}
                                            variant="contained" color="primary">
                                        GitHub
                                    </Button>
                                </Grid>

                            </Grid>

                        </div>
                    </Container>
                </div>

            </main>

        </React.Fragment>
    );
}