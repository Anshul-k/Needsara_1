import React, { useState } from 'react'
import CustDBLayout from '../../components/Dashboard/CustomerDB/CustDBLayout'
import styled from 'styled-components'
import { CardContent, TextField } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// // // // // // // // // // // Styled Components Start// // // // // // // // // // // // //
const Settings = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10%;
`
const CardContainer = styled.div`
    color: rgba(0, 0, 0, 0.87);
    margin: 1rem;
    width: 100%;
    border: 0;
    display: flex;
    position: relative;
    font-size: .875rem;
    min-width: 0;
    word-wrap: break-word;
    background: #FFF;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.2);
    margin-top: 30px;
    border-radius: 6px;
    margin-bottom: 30px;
    flex-direction: column;
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
const ButtonContainer = styled.div`
    display: flex;
    width: 30%;
    align-items: center;
    padding: 1.5rem;

    @media screen and (max-width: 786px){
        width: 210px;
    }
`
// // // // // // // // // // // // Styled Components End// // // // // // // // // // // // // 

const ColorButton = withStyles(() => ({
    root: {
        borderRadius: '20px',
        width: '100%',
        font: "Encode Sans Expanded",
        color: '#fff',
        backgroundColor: '#212F3D',
      '&:hover': {
        backgroundColor: '#01bf71',
        },
        fontSize: 13,
    },
  }))(Button);

const useStyles = makeStyles((theme) => ({
    root:{
        '& label.Mui-focused': {
      color: '#01bf71',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#01bf71',
    }
    },
  }));

const CusSettings = () => {
    const classes = useStyles();

    const [values, setValues] = useState({
        username: '',
        password: '',
        confirm: ''
      });
    
      const handleChange = (event) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value
        });
      };

    return (
        <Settings>
            <CustDBLayout/> 
            <CardContainer>
                <CardHeader>
                    Update Username & Password
                </CardHeader>
                <CardContent>
                    <TextField
                        fullWidth
                        label="Username"
                        margin="normal"
                        name="username"
                        onChange={handleChange}
                        type="text"
                        required
                        value={values.username}
                        className={classes.root}
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        name="password"
                        margin="normal"
                        onChange={handleChange}
                        type="password"
                        required
                        value={values.password}
                        className={classes.root}
                    />
                    <TextField
                        fullWidth
                        label="Confirm password"
                        margin="normal"
                        name="confirm"
                        onChange={handleChange}
                        type="password"
                        required
                        value={values.confirm}
                        className={classes.root}
                    />
                    </CardContent>
                    <ButtonContainer>
                        <ColorButton variant="contained" color="primary" className={classes.margin}>
                        Update
                        </ColorButton>
                    </ButtonContainer>
            </CardContainer> 
        </Settings>
    )
}

export default CusSettings
