import React from 'react';
import './App.css';
import styled from "styled-components";
import {Header} from "./header/Header";
import {Aside} from "./aside/Aside";
import {Main} from "./main/Main";
import {Container} from "./components/Container";

function App() {
    return (
        <Container>
            <ProjectWrapper>
                <Header/>
                <Aside/>
                <Main/>
            </ProjectWrapper>
        </Container>
    );
}


const ProjectWrapper = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(auto-fit, minmax(100px, 1fr));
    grid-auto-rows: 100px;
    gap: 15px;
`
export default App;
