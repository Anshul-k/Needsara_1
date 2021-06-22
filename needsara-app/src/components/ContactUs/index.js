import React from 'react'

import email from '../../Images/Email.png';
import location from '../../Images/location.png';
import phone from '../../Images/phone.png';
import shape from '../../Images/shape.png';
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa' 
import './ContactUsElements.css'

import {OuterContainer, 
    BigCircle,
    Square,
    Container,
    FormContainer,
    Contactinfo, 
    Contactform, 
    Circle,
    Form,
    FormTitle,
    InputContainer,
    InputPlaceholder,
    Label,
    TextAreaPlaceholder,
    LabelTextArea,
    Submit,
    ContactinfoTitle,
    ContactinfoText,
    Info,
    Information,
    Icon,
    SocialMedia,
    SocialMediaText,
    SocialIcons,
    SocialIconLink
} from './ContactUsElements'

  
const ContactUs = () => {  

    return (
        <OuterContainer>
            <Container>
                <BigCircle></BigCircle>
                <Square src={shape} alt=""></Square>
                <FormContainer>
                    <Contactinfo>
                        <ContactinfoTitle>Let's get in touch</ContactinfoTitle>
                        <ContactinfoText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisn isi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </ContactinfoText>
                        <Info>
                            <Information>
                                <Icon src={location} alt=""></Icon>
                                <p>Address</p>
                            </Information>
                            <Information>
                                <Icon src={email} alt=""></Icon>
                                <p>Email</p>
                            </Information>
                            <Information>
                                <Icon src={phone} alt=""></Icon>
                                <p>Phone number</p>
                            </Information>
                        </Info>
                        <SocialMedia>
                            <SocialMediaText>Connect with Us:</SocialMediaText>
                            <SocialIcons>
                                <SocialIconLink href="//www.facebook.com" target="_blank" aria-label="Facebook">
                                    <FaFacebook/>
                                </SocialIconLink>
                                <SocialIconLink href="//www.instagram.com" target="_blank" aria-label="Instagram">
                                    <FaInstagram/>
                                </SocialIconLink>
                                <SocialIconLink href="//www.youtube.com" target="_blank" aria-label="Youtube">
                                    <FaYoutube/>
                                </SocialIconLink>
                                <SocialIconLink href="//www.twitter.com" target="_blank" aria-label="Twitter">
                                    <FaTwitter/>
                                </SocialIconLink>
                                <SocialIconLink href="//www.linkedin.com" target="_blank" aria-label="LinkedIn">
                                    <FaLinkedin/>
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMedia>
                    </Contactinfo>
                    <Contactform>
                        <Circle width='130' height='130' top='130' right='-40'></Circle>
                        <Circle width='80' height='80' top='10' right='30'></Circle>
                        <Form action="index.html">
                            <FormTitle>Contact Us</FormTitle>
                            <InputContainer>
                                <InputPlaceholder className="Input_area" type="text" name="name" required></InputPlaceholder>
                                <Label className="label">Name</Label>
                            </InputContainer>
                            <InputContainer>
                                <InputPlaceholder className="Input_area" type="email" name="email" required></InputPlaceholder>
                                <Label className="label">Email</Label>
                            </InputContainer>
                            <InputContainer>
                                <InputPlaceholder className="Input_area" type="tel" name="phone" required></InputPlaceholder>
                                <Label className="label">Phone</Label>
                            </InputContainer>
                            <InputContainer>
                                <TextAreaPlaceholder className="Input_area" name="message" required></TextAreaPlaceholder>
                                <LabelTextArea className="label">Message</LabelTextArea>
                            </InputContainer>
                            <Submit type="submit" value="Send"></Submit>
                        </Form>
                    </Contactform>
                </FormContainer>
            </Container>
        </OuterContainer>
    )
}


export default ContactUs
