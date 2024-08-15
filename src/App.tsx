import React from 'react';
import './App.css';
import styled from "styled-components";
import {Header} from "./layout/header/Header";
import {Aside} from "./layout/aside/Aside";
import {Container} from "./components/Container";
import {Dialogs} from "./layout/Dialogs/Dialogs";
import {Profile} from "./layout/profile/Profile";
import {MainContainer} from "./components/MainContainer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Music} from "./layout/music/Music";
import {News} from "./layout/news/News";
import {AppStatePropsType} from "./redux/state";

function App({profilePage, messagesPage}:AppStatePropsType) {
    return (
        <BrowserRouter>
            <Container>
                <ProjectWrapper>
                    <Header/>
                    <Aside/>
                    <MainContainer>
                        <Routes>
                            <Route path="/profile" element={<Profile posts={profilePage.posts}/>}/>
                            <Route path="/dialogs/*" element={<Dialogs messages={messagesPage.messages} users={messagesPage.users}/>}/>
                            <Route path="/news" element={<News/>}/>
                            <Route path="/music" element={<Music/>}/>
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
