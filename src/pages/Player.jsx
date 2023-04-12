import React from 'react';
import styled from 'styled-components';
import {BsArrowLeft} from "react-icons/bs"
import video from "../assets/video.mp4"
import { useNavigate } from 'react-router-dom';

export default function Player () {
    const navigate = useNavigate()
    return ( 
    <Container>
        <div className="player">
            <div className="back">
                <BsArrowLeft  onClick={()=> navigate(-1)}/>
            </div>
            <video src={video} autoPlay loop controls muted> </video>
        </div>
    </Container>);
}

const Container = styled.div`
.player{
    width: 100vw;
    height: 100vh;
    .back {
        position: absolute;
        padding: 2rem;
        z-index: 1;
        svg{
            font-size: 3rem;
            cursor: pointer;
        }
    }
    video {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
}
`;

/*
API Key (v3 auth)
4131083295efdc4141acd9e882e3edc4

Example API Request
https://api.themoviedb.org/3/movie/550?api_key=4131083295efdc4141acd9e882e3edc4

API Read Access Token (v4 auth)
eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTMxMDgzMjk1ZWZkYzQxNDFhY2Q5ZTg4MmUzZWRjNCIsInN1YiI6IjY0MzE3NGQ1MWY5OGQxMDFkMzZmNGE3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tDnytShaMtUgAlLZYj_1x5d3_FVIC8xxL_YQ1O7hZn4



*/
