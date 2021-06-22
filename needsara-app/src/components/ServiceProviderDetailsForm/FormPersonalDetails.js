import React, { useContext } from 'react'
import { multiStepContext }from './StepContext'
import AdminDetailsForm from '../../Images/Sign_in_up/ServiceProvider/AdminDetailsForm.svg'
import {
        Container,
        ImageContainer,
        Image,
        FormContainer,
        FormContent,
        TextFieldContainer,
        ButtonContainer,
        ColorButton,
        CssTextField,
} from './Style'

const FormPersonalDetails = () => {

    // For Form to Work MultiStep // 
    const { setStep, userData, setUserData } = useContext(multiStepContext);
    // // // // // // // // // // //

    return (
        <Container>
            <ImageContainer>
                <Image src={AdminDetailsForm} alt=''/>
            </ImageContainer>
            <FormContainer>
                <FormContent>
                    <TextFieldContainer>
                        <CssTextField 
                        id="custom-css-outlined-input"
                        label="First name"
                        value={userData["firstname"]}
                        onChange={(e)=>setUserData({...userData, "firstname":e.target.value})}
                        margin="normal"
                        variant="outlined"
                        color="secondary"
                        className="TextField"
                        />
                    </TextFieldContainer>
                    <TextFieldContainer>
                        <CssTextField 
                        label="Last name"
                        value={userData["lastname"]}
                        onChange={(e)=>setUserData({...userData, "lastname":e.target.value})}
                        margin="normal"
                        variant="outlined"
                        color="secondary"
                        className="TextField"
                        />
                    </TextFieldContainer>
                    <TextFieldContainer>
                        <CssTextField 
                        label="Contact number"
                        value={userData["contact"]}
                        onChange={(e)=>setUserData({...userData, "contact":e.target.value})}
                        margin="normal"
                        variant="outlined"
                        color="secondary"
                        className="TextField"
                        /> 
                    </TextFieldContainer>
                    <ButtonContainer>
                        <ColorButton 
                        variant="contained" 
                        color="primary" 
                        className={`${""} ${"Button"}`}
                        onClick={ () => setStep(2)}
                        >
                            Next
                        </ColorButton>
                    </ButtonContainer>
                </FormContent>
            </FormContainer>
        </Container>
    )
}

export default FormPersonalDetails
