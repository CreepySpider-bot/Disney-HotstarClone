import styled from "styled-components";
function Movies() {
    return (
        <Conatainer>
            <h4>Recommended for you</h4>
            <Content>
                <Wrap>
                    <a href="/details">
                        <img src="\images\images\bao.jpg"></img>
                    </a>
                </Wrap>
                <Wrap>
                    <img src="\images\images\poster 2.png"></img>
                </Wrap>
                <Wrap>
                    <img src="\images\images\poster 3.png"></img>
                </Wrap>
                <Wrap>
                    <img src="\images\images\poster 4.png"></img>
                </Wrap>
                <Wrap>
                    <img src="\images\images\poster 5.png"></img>
                </Wrap>
                <Wrap>
                    <img src="\images\images\poster 6.png"></img>
                </Wrap>
                <Wrap>
                    <img src="\images\images\poster 7.png"></img>
                </Wrap>
                <Wrap>
                    <img src="\images\images\poster 8.png"></img>
                </Wrap>
                <Wrap>
                    <img src="\images\images\poster 9.png"></img>
                </Wrap>
                <Wrap>
                    <img src="\images\images\poster 10.png"></img>
                </Wrap>
                <Wrap>
                    <img src="\images\images\poster 11.png"></img>
                </Wrap>
                <Wrap>
                    <img src="\images\images\poster 12.png"></img>
                </Wrap>
                

            </Content>

        </Conatainer>
    );
}

export default Movies;
const Conatainer = styled.div`
    padding-bottom: 
`
const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4,minmax(0, 1fr));
`
const Wrap = styled.div`
border: 3px solid rgba(249,249,249,0.1);
cursor: pointer;
border-radius: 10px;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}
&:hover{
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249,249,249,0.8);
}
`