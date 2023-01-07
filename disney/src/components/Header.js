import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Header() {
    return ( 
        <Nav>
            <Logo src="\images\images\logo.svg"/>
            <NavMenu>
                <a href='/'>
                    <img src="\images\images\home-icon.svg"></img>
                    <span>HOME</span>
                </a>

                <a>
                    <img src="\images\images\search-icon.svg"></img>
                    <span>SEARCH</span>
                </a>

                <a>
                    <img src="\images\images\watchlist-icon.svg"></img>
                    <span>WATCH LIST</span>
                </a>

                <a>
                    <img src="\images\images\original-icon.svg"></img>
                    <span>ORIGINALS</span>
                </a>

                <a>
                    <img src="\images\images\movie-icon.svg"></img>
                    <span>MOVIES</span>
                </a>

                <a>
                    <img src="\images\images\series-icon.svg"></img>
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <a href='/login'>
                <UserImg src="/images/images/myimage.png" />
            </a>
            
        </Nav>
    );
}

const NavBarLink = styled(Link)`

`
const Nav = styled.nav`
    height: 70px;
    background-color: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
`
const Logo = styled.img`
    width: 80px;
`
const NavMenu = styled.nav`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    a{
        text-decoration: none;
        color: white;
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        img{
            height: 20px
        }
        span{
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            padding-top: 3px;
            padding-left: 3px;
            &:after{
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s; 
                transform: scaleX(0)
                
            }
        }
        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`
const UserImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
`
export default Header;