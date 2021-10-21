import React from 'react';
import styled from 'styled-components';
import Section from './Section';

const Home = () => {
    return (
        <Container>
            <Section 
                title="Model S"
                description=" Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                topBtnText="Custom Order"
                bottomBtnText="Existing Inventory"
            />
            <Section 
                title="Model Y"
                description=" Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                topBtnText="Custom Order"
                bottomBtnText="Existing Inventory"
            />
            <Section 
                title="Model 3"
                description=" Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                topBtnText="Custom Order"
                bottomBtnText="Existing Inventory"
            />
            <Section 
                title="Model X"
                description=" Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                topBtnText="Custom Order"
                bottomBtnText="Existing Inventory"
            />
            <Section 
                title="Solar Panels"
                description="Lowest Cost Solar Panels in America"
                backgroundImg="solar-panel.jpg"
                topBtnText="Order Now"
                bottomBtnText="Learn More"
            />
            <Section
                title="Solar Roof"
                description="Produce Clean Energy From Your Roof"
                backgroundImg="solar-roof.jpg"
                topBtnText="Order Now"
                bottomBtnText="Learn More"
            />
            <Section
                title="Accessories"
                description=""
                backgroundImg="accessories.jpg"
                topBtnText="Shop Now"
                bottomBtnText=""
            />
            

        </Container>
    )
}

const Container = styled.div`
    height: 100vh;

`


export default Home;
