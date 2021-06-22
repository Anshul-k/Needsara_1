import React, { useContext } from 'react'
import { multiStepContext } from './StepContext'
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
        CssTextField
} from './Style'

const FormUserDetails = () => {
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
                label="E-mail"
                value={userData["email"]}
                onChange={(e)=>setUserData({...userData, "email":e.target.value})}
                margin="normal"
                variant="outlined"
                color="secondary"
                className="TextField"
                />
              </TextFieldContainer>
              <TextFieldContainer>
                <CssTextField 
                label="Country"
                value={userData["country"]}
                onChange={(e)=>setUserData({...userData, "country":e.target.value})}
                margin="normal"
                variant="outlined"
                color="secondary"
                className="TextField"
                />
              </TextFieldContainer>
              <TextFieldContainer>
                <CssTextField 
                label="District"
                value={userData["district"]}
                onChange={(e)=>setUserData({...userData, "district":e.target.value})}
                margin="normal"
                variant="outlined"
                color="secondary"
                className="TextField"
                /> 
              </TextFieldContainer>
              <ButtonContainer>
                <ColorButton 
                className={`${""} ${"Button"}`}
                variant="contained"
                color="primary"
                onClick={() => setStep(1)}
                >
                  Prev
                </ColorButton>
                <ColorButton 
                className={`${""} ${"Button"}`}
                variant="contained"
                color="primary"
                onClick={() => setStep(3)}
                >
                  Next
                </ColorButton>
              </ButtonContainer>
          </FormContent>
      </FormContainer>
    </Container>
  )
}

export default FormUserDetails


