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
    Btn,
    ErrorAlert
} from "./styledComponents"
import { useRouter } from "next/router"

const Login = () => {
    const router = useRouter()
    const route = process.env.NEXT_PUBLIC_API_URL
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [permission, setPermission] = useState(false)
    const [alertOpen, setAlertOpen] = useState(false)
    const [result, setResult] = useState()
    const [containerClass, setContainerClass] = useState('visible')
    
    const handleAlertClose = () => {
        setAlertOpen(false)
    }

    const hideContainer = () => {
        console.log('Dentro:', name)
        setContainerClass('hidden')
        router.push({
            pathname: '/feed',
            query: {auth: name},
          })
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setAlertOpen(false)
        }, 10000)

        return () => {
            clearTimeout(timer)
        }
    }, [alertOpen])

    const handleLogin = async() => {
        try {
            let url = route + `account/login`
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name, password})
            })
            if(res.status === 200) {
                // setResult('Login successful! Redirecting.')
                // setAlertOpen(true)
                setPermission(true)
                hideContainer()
            } else if(res.status === 401) {
                setResult('Incorrect username or password!')
                setAlertOpen(true)
            }
        } catch {
            setResult('There was an error logging into your account.')
            setAlertOpen(true)
        }
        
    }

    const handleRegister = async() => {
        try {
            let url = route + `account/create`
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name, password})
            })
            if(res.status === 200) {
                setResult('User registered successfully! Redirecting.')
                setAlertOpen(true)
                setPermission(true)
            } else if(res.status === 401) {
                setResult('User already exist.')
                setAlertOpen(true)
            } else if(res.status === 400) {
                setResult('Username and password are required.')
                setAlertOpen(true)
            }
        } catch {
            setResult('An error occurred while registering your account.')
            setAlertOpen(true)            
        }
    }

    return (
        <Container className={containerClass}>
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
                            onClick={handleRegister}
                        >
                            Register
                        </Btn>
                    </ButtonContainer>
                </FormContainer>
                {result && <ErrorAlert alias={result} alertOpen={alertOpen} handleAlertClose={handleAlertClose}/>}
            </RightContainer>
        </Container>
    )
}

export default Login