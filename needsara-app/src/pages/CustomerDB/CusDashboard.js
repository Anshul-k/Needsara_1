import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import CustDBLayout from '../../components/Dashboard/CustomerDB/CustDBLayout'
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { CardContent, Grid, LinearProgress } from '@material-ui/core';

// // // // // // // // // // // Styled Components Start // // // // // // // // // // //

const DashboardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;

  @media screen and (max-width: 1080px){
    flex-direction: column-reverse;
    margin-left: 6rem;
  }
`
const TabContainer = styled.div`
  display: flex;
  margin: 3rem;
  margin-top: 5rem;
  width: 100%;

  @media (max-width: 1080px){
    margin: 5rem;
  }
`
const CardContainer = styled.div`
    color: rgba(0, 0, 0, 0.87);
    margin: 1rem;
    width: 900px;
    border: 0;
    display: flex;
    position: relative;
    font-size: .875rem;
    min-width: 0;
    word-wrap: break-word;
    background: #FFF;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.2);
    margin-top: 6rem;
    border-radius: 6px;
    margin-bottom: 30px;
    flex-direction: column;

    @media (max-width: 1080px){
    margin: 6rem;
  }
`
const CardHeader = styled.div`
    padding: 1rem;
    margin: -20px 25px 0 25px;
    border-radius: 10px;
    background: linear-gradient(60deg, #01bf71, #00A461);
    box-shadow: 0 4px 20px 0 rgba(0,0,0,0.14), 0 7px 10px -5px rgb(156,39,176,0.4);
    color: #fff;
    position: relative;
`
const PprofileInfoContainer = styled.div`
  padding: 0.5rem;
`
const ProfileCompletion = styled.div`

`
const LinkTo = styled(Link)`
  text-decoration: none;
  color: inherit;

  :hover{
    color: #01bf71;
  }
`
// // // // // // // // // // // Styled Components End // // // // // // // // // // //

const TasksProgress = () => (
    <CardContent>
        <Grid
          container
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              Profile Completed
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              20%
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ pt: 3 }}>
          <LinearProgress
            value={20}
            variant="determinate"
          />
        </Box>
        <Typography
              color="textPrimary"
              variant="subtitle1"
            >
              <LinkTo to="/user/profile">Click Here </LinkTo>to complete your profile details
            </Typography>
    </CardContent>
  );

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "transparent",
      width: 700,
    },
  }));
  

const Dashboard = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleChangeIndex = (index) => {
        setValue(index);
    };

        return (
            <DashboardContainer>
                <CustDBLayout/>
                <TabContainer>
                  <div className={classes.root}>
                      <AppBar position="relative" color="default">
                          <Tabs
                          value={value}
                          onChange={handleChange}
                          indicatorColor="primary"
                          textColor="primary"
                          variant="fullWidth"
                          aria-label="full width tabs example"
                          >
                          <Tab label="Your Requests" {...a11yProps(0)} />
                          <Tab label="Your Reviews" {...a11yProps(1)} />
                          </Tabs>
                      </AppBar>
                      <SwipeableViews
                          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                          index={value}
                          onChangeIndex={handleChangeIndex}
                      >
                          <TabPanel value={value} index={0} dir={theme.direction}>
                          No Requests yet
                          </TabPanel>
                          <TabPanel value={value} index={1} dir={theme.direction}>
                          No Reviews yet
                          </TabPanel>
                      </SwipeableViews>
                    </div>
                </TabContainer>
                <CardContainer>
                    <CardHeader>
                    </CardHeader>
                    <PprofileInfoContainer>
                      <ProfileCompletion>
                        <TasksProgress/>
                      </ProfileCompletion>
                    </PprofileInfoContainer>
                </CardContainer>    
            </DashboardContainer>
        )
}

export default Dashboard