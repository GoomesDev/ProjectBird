import { 
    Button,
    List,
    ListItem,
    TextField
} from "@mui/material"
import styled from "styled-components"

export const Container = styled.div`
    width: 800px;
    display: flex;
    justify-content: space-evenly;
`

export const LeftContainer = styled.div`
    width: 20%;
    height: 500px;
    background-color: #ebebeb;
    box-shadow: 2px 1px 2px 1px;
`

export const RightContainer = styled.div`
    width: 70%;
    height: 500px;
    /* background-color: #ebebeb; */
    display: flex;
    flex-direction: column;
    align-items: center;
    /* box-shadow: 2px 1px 2px 1px; */
`

export const FeedContainer = styled(List)`
    width: 96%;
`

export const PostContainer = styled(ListItem)`
    width: 100%;
    margin: 10px 0;
    background-color: #ebebeb;
    box-shadow: 1px 1px 1px 1px;
    padding: 0
`

export const PostHeader = styled.div`
    width: 100%;
    display: flex;
    background-color: #ebebeb;
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
    cursor: pointer;
    &:focus, &::after, &:hover {
        background-color: #00a2ff;
    }
`

export const AuthorContainer = styled.div`
    width: 10%;
    height: 60px;
    background-color: #00a2ff;
    display: flex;
    place-items: center;
    place-content: center;
    color: #fff;
`

export const ContentContainer = styled.div`
    margin-left: 10px;
`