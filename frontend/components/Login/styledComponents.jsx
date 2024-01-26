import styled from "styled-components"
import { 
    Button,
    TextField 
} from "@mui/material"

export const Container = styled.div`
    width: 500px;
    height: 300px;
    background: #ebebeb;
    display: flex;
`

export const LeftContainer = styled.div`
    width: 30%;
    display: flex;
    place-content: center;
    place-items: center;
    background-color: #00a2ff;
`

export const FormContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 13px;
`

export const RightContainer = styled.div`
    width: 70%;
    display: flex;
    place-content: center;
    place-items: center;
`

export const Title = styled.span`
    font-size: 1.2rem;
    font-weight: 600;
`

export const FormText = styled(TextField)`
    border-color: #8d8d8d;
    & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border: 1px solid #000;
  }
`

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const Btn = styled(Button)`
    width: 45%;
    background-color: #00a2ff;
`
