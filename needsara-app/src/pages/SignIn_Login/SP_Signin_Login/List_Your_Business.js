import React from 'react'
import styled from 'styled-components'
import { FaUserAlt, FaLock } from 'react-icons/fa'
import { TextField } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Avatar from '../../../Images/ListYourBusiness/avatar.svg'
import bg from '../../../Images/ListYourBusiness/bg.svg'
import wave from '../../../Images/ListYourBusiness/wave.png'


// // // // // // // // // // // // // Styled Components Start // // // // // // // // // // // // // // 
const OverallContainer = styled.div`
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
`
const WaveImage = styled.img`
    position: fixed;
    height: 100%;
    left: -2rem;
    bottom: -1rem;
    z-index: -1;

    @media screen and (max-width: 900px) {
        position: absolute;
        height: 50%;
        left: 0;
        bottom: -0.5rem;
        z-index: -1;
    }

    @media screen and (max-width: 600px){
        bottom: -1rem;
        left: -1rem;
    }
`
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 7rem;
    padding: 0 2rem;

    @media screen and (max-width: 1050px) {
        grid-gap: 5rem;
    }
    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr;
    }

`
const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    text-align: center;

    @media screen and (max-width: 900px) {
        justify-content: center;
    }

`
const Form = styled.form`
    width: 35rem;

    .Avatar{
        width: 100px;
    }

    @media screen and (max-width: 1000px) {
        width: 30rem;
    }
`
const ImageContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .bg{
        width: 500px;

        @media screen and (max-width: 1000px) {
        width: 400px;
        }
    }

    @media screen and (max-width: 900px) {
        position: absolute;
        right: -1.5rem;
        top: -2rem;
        z-index: -3;
    }
`
const Image = styled.img`
    
`
const H2 = styled.h2`
    font-size: 2.9rem;
    text-transform: uppercase;
    margin: 15px 0;
    color: #333;

    @media screen and (max-width: 1000px) {
        font-size: 2.4rem;
        margin: 8px;
    }

`
const InputDiv = styled.div`
    margin: 0.5rem;
    position: relative;
`
const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    gap: 1rem;

    .icon{
        color: #38d39f;
        font-size: 1.8rem;
    }
    .textfield{
        width: 100% !important;
        padding: 0.5rem 0.7rem;
        font-size: 1.2rem;
    }
`
const H5 = styled.h5`
    margin-left: 3rem;
`
const RedirectContent = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-bottom: 1rem;

    .Link{
        font-size: 0.9em;
        font-weight: 600;
        margin-left: 5px;
        text-decoration: none;
        color: black;
        text-align: right;
        transition: .3s;

        :hover{
            color: #38d39f;
        }
    }
`

// // // // // // // // // // // // // Styled Components End // // // // // // // // // // // // // // //

const useStyles = makeStyles((theme) => ({
    root:{
        '& label.Mui-focused': {
      color: '#38d39f',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#38d39f',
    }
    },
    margin: {
      margin: theme.spacing(1),
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
      },
  }));

  const ColorButton = withStyles(() => ({
    root: {
      color: "#fff",
      borderRadius: 20,
      width: "40%",
      fontFamily: "sans-serif",
      backgroundColor: "#38d39f",
      '&:hover': {
        backgroundColor: "#3FECB2",
      },
    },
  }))(Button);


const List_Your_Business = () => {

    const classes = useStyles();

    return (
        <OverallContainer>
            <WaveImage src={wave}/>
            <Container>
                <ImageContainer>
                    <Image className="bg" src={bg}/>
                </ImageContainer>
                <LoginContainer>
                    <Form action="index.html">
                        <Image className="Avatar" src={Avatar}/>
                        <H2>Welcome</H2>
                        <InputDiv>
                            <Div>
                                <FaUserAlt className="icon"/>
                                <TextField  
                                    id="standard-secondary" 
                                    label="Username" 
                                    required
                                    className={`${classes.root} ${"textField"}`}
                                />
                            </Div>
                        </InputDiv>
                        <InputDiv>
                            <Div>
                                <FaLock className="icon"/>
                                <TextField  
                                    id="standard-secondary" 
                                    label="Password"
                                    type="password"
                                    required 
                                    className={`${classes.root} ${"textField"}`}
                                />
                            </Div>
                        </InputDiv>
                        <InputDiv>
                            <Div>
                                <FaLock className="icon"/>
                                <TextField
                                    id="standard-secondary" 
                                    label="Confirm Password"
                                    type="password"
                                    required 
                                    className={`${classes.root} ${"textField"}`}
                                />
                            </Div>
                        </InputDiv>
                        <RedirectContent>
                            <H5>Already a member ?</H5><Link to="/signin_admin" className="Link"> Click Here</Link>
                        </RedirectContent>
                        <ColorButton variant="contained" color="primary" className={classes.margin}>
                            Sign Up
                        </ColorButton>
                    </Form>
                </LoginContainer>
            </Container>
        </OverallContainer>
    )
}

export default List_Your_Business
