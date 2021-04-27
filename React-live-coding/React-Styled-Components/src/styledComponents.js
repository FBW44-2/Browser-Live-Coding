import styled , {css} from "styled-components"

export const Header = styled.h1`
background-color:yellow;
color:white;
border:2px solid gray;
`
export const Flex=styled.div`
display:flex;
flex-direction:${(props)=>props.column? "column":"row"};
flex-wrap:wrap;
justify-content:space-between;
`

export const Button =styled.button`
color:white;
background-color:${(props)=>props.primary?"blue":props.success?"green":"black"};
border-radius:5px;
`

export const Link = styled.a`
    text-decoration:none;
    color:black;
    background-color:gray;
    &:hover{
        padding:10px
    }
`
export const Container = styled.div`
${props=>props.size==="lg"? css`
background-color:black;
width:500px;
height:500px;
border:10px solid yellow;
` : css`
background-color:gray;
width:200px;
height:200px;
border:1px solid green;
`  }
`