import { useEffect, useState } from "react"
import Image from 'next/image'
import { 
    Container,
    LeftContainer,
    RightContainer,
    FormContainer,
    Title,
    FormText,
    ButtonContainer,
    Btn
} from "./styledComponents"

const Login = () => {
    const route = process.env.NEXT_PUBLIC_API_URL
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async() => {
        let url = route + `api/account/login`
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, password})
        })
        const result = await res.json()
        if(res) {
            console.log('funfou')
        }
    }

    return (
        <Container>
            <LeftContainer>
                <Image
                src="/logo.png"
                alt="Vercel Logo"
                width={150}
                height={150}
                priority
                />
            </LeftContainer>

            <RightContainer>
                <FormContainer>
                    <Title>Welcome to Project Bird</Title>
                    <FormText
                        size="small"
                        placeholder="Username"
                        onChange={e => setName(e.target.value)}
                    />
                    <FormText
                        size="small"
                        placeholder="Password"
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <ButtonContainer>
                        <Btn 
                            variant="contained"
                            size="small"
                            disableElevation
                            onClick={handleLogin}
                        >
                            Login
                        </Btn>

                        <Btn
                            variant="contained"
                            size="small"
                            disableElevation
                        >
                            Register
                        </Btn>
                    </ButtonContainer>
                </FormContainer>
            </RightContainer>
        </Container>
    )
}

export default Login