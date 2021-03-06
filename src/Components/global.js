import React, { Component } from 'react';
import styled from 'styled-components';
import { PopFromNothing } from '../Components/staticposes.js';
import { FunctionIcon } from './navigation.js';
import {FriendlyMessage, FadeDelay} from './staticposes.js';

export const StandardButton = styled.button`
    outline:none;
    height:45px;
    width:130px;
    border:3px solid;
    border-image: linear-gradient(to top left, rgba(191, 63, 63, 1) 33.33%, rgba(255, 84, 5, 1) 66.66%, rgba(175, 0, 103, 1) 100%) 5;  
    display:flex;
    justify-content:space-around;

    cursor:pointer;
    transition:border-image 0.4s, border-color 0.2s;
    -ms-transition:border-image 0.4s, border-color 0.2s;
    -moz-transition:border-image 0.4s, border-color 0.2s;
    -webkit-transition:border-image 0.4s, border-color 0.2s;
    -o-transition:border-image 0.4s, border-color 0.2s;
    border-color:rgba(239, 0, 107, 1);

    background-color:transparent;

    position:relative;
    left:calc(50% - 65px);

    font-size:16px;
    :hover{
        border-image:none;
        border-color:rgba(10, 193, 255, 1);
    }
`;


export const HeaderButton = styled.button`
    outline:none;
    height:55px;
    width:100px;

    position:relative;
    top:2.5px;

    font-size:18px;

    background:transparent;
    margin:0 10px 0 0;
    padding:0;

    cursor:pointer;

    transition: background 0.2s;
    -ms-transition: background 0.2s;
    -moz-transition: background 0.2s;
    -webkit-transition: background 0.2s;
    -o-transition: background 0.2s;

    border:none;

    :hover{
        background:rgba(0,0,0,0.25);
    }
    @media screen and (max-width:800px){
        height:45px;
        width:75px;
        font-size:14px;
    }
`
export const Overlay = styled.div`
    position:fixed;
    top:0px;
    left:0px;
    width:100vw;
    height:100vh;
    background:rgba(0,0,0,0.3);
    z-index:200000;
`;
export const LogModal = styled.div`
    width:80vw;
    height:90vh;

    position:absolute;
    top:5vh;
    left:10vw;

    border-radius:5px;

    z-index:200001;

    display:flex;
    flex-direction:row;
    flex-wrap: wrap;

    overflow-y:scroll;
`;
export const HalfModal = styled.div`
    width:50%;
    height:100%;
`;
export const HeaderButtonContainer = styled.div`
    display:flex;
    flex-direction:row;
    float:right;
    width:auto;
    height:60px;

    transform:translateX(-10px);
    -ms-transform:translateX(-10px);
    -moz-transform:translateX(-10px);
    -webkit-transform:translateX(-10px);
    -o-transform:translateX(-10px);
`

export const TextInput = styled.div`
    p{
        color:rgba(191, 63, 63, 1);
        letter-spacing:3px;
        transform:translateX(5%);
        -ms-transform:translateX(5%);
        -moz-transform:translateX(5%);
        -webkit-transform:translateX(5%);
        -o-transform:translateX(5%);
        margin:0 10px 0 0;
        padding:0;
    }
    input{
        outline:none;
        border:none;
        border-bottom:3px solid;
        border-color:rgba(175, 0, 103, 1);
        border-image:linear-gradient(to right, rgba(191, 63, 63, 1) 25.0%, rgba(10, 193, 255, 1) 50.0%, rgba(175, 0, 103, 1) 75.0%, rgba(255, 84, 5, 1) 100%) 5;
        width:90%;
        transform:translateX(5%);
        -ms-transform:translateX(5%);
        -moz-transform:translateX(5%);
        -webkit-transform:translateX(5%);
        -o-transform:translateX(5%);
        
        line-height:24px;
        font-size:22px;
        margin-bottom:15px;
    }
`

export const ProfilePictureContainer = styled.div`
    width:50%;
    :before{
        display:block;
        content:"";
    }
    margin:20px auto;
    @media screen and (max-width:800px){
        width:20%;
        margin:0px auto 15px auto; 
        min-width:120px;
    }
`;
export const ProfilePic = styled.img`
    width:calc(100% - 6px);
    height:calc(100% - 6px);
    object-fit:cover;
    border-radius:100%;
    position:relative;
    border:3px solid rgba(255, 84, 5, 1);
    
`
export const CoverThis = styled.div`
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.4);
    transition:background 0.2s;
    -ms-transition:background 0.2s;
    -moz-transition:background 0.2s;
    -webkit-transition:background 0.2s;
    -o-transition:background 0.2s;

    cursor:pointer;

    :hover{
        background:rgba(0,0,0,0.6);
    }
`

export const ReturnMessage = ({ message, functionOption, _pose }) => (
    <FriendlyMessage className="alert Pink-bg White-children" pose={_pose} onClick={functionOption}>
        {message}
    </FriendlyMessage>
)

export const LoaderNoBG = () => (
    <section id="loader">
        <div className="Container">
            <div className="Center">
                <div className="LoadScaler">
                </div>
                <div className="LoadScaler">
                </div>
                <div className="LoadScaler">
                </div>
                <div className="LoadScaler">
                </div>
                <div className="LoadScaler">
                </div>
                <div className="LoadScaler">
                </div>
                <div className="LoadScaler">
                </div>
            </div>
        </div>
        <h1 className="center-title">HEADLINERR</h1>
    </section>
)
export const Loader = () => (
    <div className="Load-Full">
        <div className="LoadContainer">
            <div className="LoadScaler">
                <div className="LoadScaler_GetsColor">
                </div>
            </div>
            <div className="LoadScaler">
                <div className="LoadScaler_GetsColor">
                </div>
            </div>
            <div className="LoadScaler">
                <div className="LoadScaler_GetsColor">
                </div>
            </div>
            <div className="LoadScaler">
                <div className="LoadScaler_GetsColor">
                </div>
            </div>
        </div>
    </div>
)

export class ModalOverlay extends Component {

    render() {
        return (
            <Overlay>
                <PopFromNothing>
                    <LogModal className="White-bg">
                        <HalfModal className="Half-Modal  ModalImage">
                            <img src={this.props.leftimg} alt="Login" className="Cover Left-Radii" />
                        </HalfModal>
                        <HalfModal className="Half-Modal">
                            <h2 className="Center-Title Red">{this.props.title}</h2>
                            <TextInput>
                                <label>
                                    <p>EMAIL</p>
                                </label>
                                <input type="email"></input>
                                <label>
                                    <p>USERNAME</p>
                                </label>
                                <input type="text"></input>
                                <label>
                                    <p>PASSWORD</p>
                                </label>
                                <input type="password"></input>
                                <label>
                                    <p>CONFIRM PASSWORD</p>
                                </label>
                                <input type="password"></input>
                                <StandardButton>
                                    SUBMIT
                                </StandardButton>
                            </TextInput>
                        </HalfModal>
                        <FunctionIcon navIcon="close" classOption="Darkgray-children Modal-Button" functionOption={this.props.functionOption} />
                    </LogModal>
                </PopFromNothing>
            </Overlay>
        )
    }

}