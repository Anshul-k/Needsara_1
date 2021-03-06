import React from 'react'
import { Button } from './ButtonElement'
import AboutUsImage from '../../Images/AboutUsHomePage.svg'
import {
    AboutContainer, 
    AboutWrapper,
    AboutRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img
} from './AboutUsElements'


const AboutUs = ({lightBg, id, imgStart, topLine, lightText, headline, 
darkText, description, buttonLabel, alt, primary, dark, dark2}) => {
    return (
        <React.Fragment>
           <AboutContainer lightBg= {lightBg} id={id}>
                <AboutWrapper>
                    <AboutRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button
                                    to="/aboutUsPage"
                                    duration={500}
                                    exact="true"
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={AboutUsImage} alt={alt}></Img>
                            </ImgWrap>
                        </Column2>
                    </AboutRow>
                </AboutWrapper>
           </AboutContainer> 
        </React.Fragment>
    )
}

export default AboutUs
