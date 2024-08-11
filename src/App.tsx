import React from 'react';
import './App.css';
import styled from "styled-components";
import {Header} from "./layout/header/Header";
import {Aside} from "./layout/aside/Aside";
import {Main} from "./layout/main/Main";
import {Container} from "./components/Container";
import {Dialogs} from "./layout/Dialogs/Dialogs";
import {MainContainer} from "./components/MainContainer";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Container>
                <ProjectWrapper>
                    <Header/>
                    <Aside/>
                    <MainContainer>

                        <Routes>
                            <Route path="/profile" element={<Main/>}/>
                            <Route path="/dialogs" element={<Dialogs/>}/>
                        </Routes>

                    </MainContainer>
                </ProjectWrapper>
            </Container>
        </BrowserRouter>
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

{/*<Main/>*/}
{/*<Dialogs/>*/}
