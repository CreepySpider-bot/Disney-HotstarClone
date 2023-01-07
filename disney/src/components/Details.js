import styled from "styled-components";

function Details() {
    return (
        <Container>
            <Background>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg"></img>
            </Background>
            <ImageTitle>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78"/>
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/images/play-icon-black.png"></img>
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/images/play-icon-white.png"></img>
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/images/group-icon.png"/>
                </GroupWatchButton>
            </Controls>
            <SubTitle> 
                    2018 ○ 7m ○ Family, Fantasy, Kids, Animation
            </SubTitle>
            <Description>
            An ageing Chinese mom gets another chance at motherhood when one of her dumplings springs to life as a lively, giggly dumpling boy.But she finds that nothing stays cute and small forvever.
            </Description>
        </Container>
    );
}

export default Details;
const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;

`
const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        
    }
`
const ImageTitle = styled.div`
    margin-top: 60px;
    height: 30vh;
    min-height: 170px;
    min-width: 200px;
    width: 35vh;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`
const Controls = styled.div`
    display: flex;
    align-items: center;

`

const PlayButton  = styled.button`
    border-radius: 4px;
    font-size: 15px;
    display: flex;  
    align-items: center;
    height: 56px;
    background: rgb(249,249,249);
    border: none;
    padding: 0 24px;
    margin-right: 24.2px;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover{
        background: rgb(198,198,198)
    }
`

const TrailerButton = styled(PlayButton)`
    background: rgba(0,0,0,0.3);
    border: 1px solid rgb(249,249,249);
    color: rgb(249,249,249);
`

const AddButton = styled.button`
    cursor: pointer;
    margin-right: 16px;
    height: 44px;
    width: 44px;
    display: flex; 
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0,0,0,0.6);

    span{
        font-size: 30px;
        color: white;
    }

`

const GroupWatchButton = styled(AddButton)`
    background-color: black;
    
`
const SubTitle = styled.div`
    color: rgb(249,249,249);
    letter-spacing: 0.5px;
    font-family: "Roboto","HelveticaNeue-Light",sans-serif;
    font-size: 15px;
    min-height: 20px;
    margin-top: 20px;
`

const Description = styled.div`
    letter-spacing: 0.5px;
    font-family: "Roboto","HelveticaNeue-Light",sans-serif;
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249,249,249);
    max-width: 50%;
`