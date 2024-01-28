import styled from "styled-components"
import { 
    Button,
    TextField,
    Collapse,
    Alert
} from "@mui/material"

export const Container = styled.div`
    width: 500px;
    height: 300px;
    background: #ebebeb;
    display: flex;
    transition: opacity 0.5s ease-in-out;
    &.hidden {
        opacity: 0;
        pointer-events: none;
    }
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
    flex-direction: column;
    position: relative;
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

export const ErrorAlert = ({alias, alertOpen, handleAlertClose}) => {

    const getText = () => {
        if(alias === 'User registered successfully! Redirecting.') {
            return 'success'
        } else if(alias === 'User already exist.') {
            return 'error'
        } else if(alias === 'Username and password are required.') {
            return 'error'
        } else if(alias === 'Incorrect username or password!') {
            return 'error'
        } else if(alias === 'Login successful! Redirecting.') {
            return 'success'
        }
        
        

        else if(alias === 'There was an error logging into your account.') {
            return 'error'
        } else if(alias === 'An error occurred while registering your account.') {
            return 'error'
        }
    }

    return (
        <Collapse in={alertOpen}>
            <Alert 
            open={alertOpen} 
            onClose={() => handleAlertClose()} 
            variant="filled" 
            severity={getText()}
            style={{
                borderRadius: '0',
                position: 'absolute',
                bottom: 0,
                left: 3,
                width: '89%',
            }}
            >
                {alias}
            </Alert>
        </Collapse>
    )
}
