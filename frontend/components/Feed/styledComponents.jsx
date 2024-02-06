import { 
    Button,
    IconButton,
    List,
    ListItem,
    TextField
} from "@mui/material"
import styled from "styled-components"

export const Container = styled.div`
    width: 870px;
    display: flex;
    justify-content: space-evenly;
`

export const LeftContainer = styled.div`
    width: 25%;
    height: 550px;
    background-color: #ebebeb;
    /* box-shadow: 1px 1px 1px 1px; */
    border-radius: 10px;
`

export const LogoContainer = styled.div`
    width: 100%;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    background-color: #00a2ff;
    height: 40px;
    display: flex;
    align-items: center;
`

export const Title = styled.span`
    font-weight: 600;
`

export const RightContainer = styled.div`
    width: 75%;
    height: 550px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const FeedContainer = styled(List)`
    width: 96%;
    height: 500px;
    overflow-y: scroll;
    margin-top: 5px;
    padding: 3px;
    &::-webkit-scrollbar {
        width: 0;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #00a2ff;
        border-radius: 5px;
    }
    &::-webkit-scrollbar-track {
        background-color: transparent;
        
    }
`

export const PostContainer = styled(ListItem)`
    width: 100%;
    margin: 10px 0;
    background-color: #ebebeb;
    box-shadow: 1px 1px 1px 1px;
    padding: 0;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
`

export const PostHeader = styled.div`
    width: 100%;
    display: flex;
    background-color: #ebebeb;
    border-radius: 10px;
    box-shadow: 1px 1px 1px 1px;
`

export const PostBar = styled(TextField)`
    width: 96%;
    & .MuiInput-underline:after {
      border: none;
    }
    margin: 10px;
`

export const SearchBtn = styled(Button)`
    width: 10%;
    border-radius: 0;
    background-color: #00a2ff;
    display: flex;
    place-content: center;
    place-items: center;
    color: #fff;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    cursor: pointer;
    &:focus, &::after, &:hover {
        background-color: #00a2ff;
    }
`

export const AuthorContainer = styled.div`
    width: 100%;
    height: 26px;
    font-size: 13px;
    padding-left: 10px;
    background-color: #00a2ff;
    display: flex;
    text-align: left;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    box-sizing: border-box;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
`

export const ContentContainer = styled.div`
    height: 50px;
    width: 100%;
    padding-left: 10px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`

export const OptionsContainer = styled.div`
    width: 70px;
    height: 22px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const OptionBtn = styled.div`
    color: #fff;
    width: 18px;
    display: flex;
    place-content: center;
    place-items: center;
    cursor: pointer;
    &:hover {
        color: #000;
    }
`

