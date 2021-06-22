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
        CssTextField,
} from './Style'

const FormOtherDetails = () => {
  // For Form to Work MultiStep //
  const { setStep, submitData} = useContext(multiStepContext);
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
                label="Other"
                margin="normal"
                variant="outlined"
                color="secondary"
                className="TextField"
                />
              </TextFieldContainer>
              <TextFieldContainer>
                <CssTextField 
                label="Other"
                margin="normal"
                variant="outlined"
                color="secondary"
                className="TextField"
                />
              </TextFieldContainer>
              <TextFieldContainer>
                <CssTextField 
                label="Other"
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
                onClick={() => setStep(2)}
                >
                  Prev
                </ColorButton>
                <ColorButton 
                className={`${""} ${"Button"}`}
                variant="contained"
                color="primary"
                onClick={submitData}
                >
                  Submit
                </ColorButton>
              </ButtonContainer>
          </FormContent>
      </FormContainer>
  </Container>
  )
}

export default FormOtherDetails
