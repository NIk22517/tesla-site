import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade'

const Section = ({ title, description, topBtnText, bottomBtnText, backgroundImg}) => {
    return (
        <Wrap bgImage={backgroundImg}>
        <Fade bottom>
            <ItemText>
                <h1> { title }</h1>
                <p>
                    {description}
                </p>
            </ItemText>
            </Fade>
            <Buttons>
            <Fade bottom>
            <ButtonGroup>
                    <TopButton> {topBtnText} </TopButton>
                    {bottomBtnText && <BottomButton> {bottomBtnText} </BottomButton>}
            </ButtonGroup>
            </Fade>
            <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

const Wrap = styled.div `
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position:center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url('/images/${props.bgImage}')`}
`;

const ItemText = styled.div `
    text-align: center;
    padding-top: 10vh;
    z-index: -1;
`;

const ButtonGroup = styled.div `
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px){
        flex-direction: column;
    }
`;

const TopButton = styled.div `
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    font-size: 12px;
    cursor: pointer; 
    text-transform: uppercase;
    margin: 10px;
`;

const BottomButton = styled(TopButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
`;

const Buttons = styled.div `
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`;



const DownArrow = styled.img `
   height: 40px;
   overflow-x: hidden;
   text-align: center;
   margin-bottom: 5px;
   animation: animateDown infinite 1.5s;
`

export default Section
