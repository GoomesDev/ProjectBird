import { useEffect, useState } from "react"
import { 
    Container,
    LeftContainer,
    RightContainer,
    PostContainer,
    FeedContainer,
    PostBar,
    AuthorContainer,
    ContentContainer,
    SearchBtn,
    PostHeader,
    LogoContainer,
    Title,
    OptionsContainer,
    OptionBtn
} from "./styledComponents"
import { useRouter } from "next/router"
import SendIcon from '@mui/icons-material/Send'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import Image from 'next/image'

const Feed = () => {
    const route = process.env.NEXT_PUBLIC_API_URL
    const router = useRouter()
    const {auth} = router.query
    const [posts, setPosts] = useState([])
    const [content, setContent] = useState('')

    const getPosts = async() => {
        try {
            let url = route + `feed/posts`
            const res = await fetch(url)
            const result = await res.json()
            setPosts(result.data)
        } catch {
            console.log('deu merda')
        }
    }

    const submitPost = async() => {
        try {
            let url = route + `feed/create/${auth}`
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({content})
            })
            const result = await res.json()
            getPosts()
            setContent('')
        } catch {
            console.log('deu merda')
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        submitPost()
    }

    const delPost = async(row) => {
        try {
            let url = route + `feed/delete/${row.id}`
            const res = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if(res.status === 200) {
                getPosts()
            }
        } catch {
            console.log('deu merda')
        }
        
    }

    useEffect(() => {
        getPosts()
    }, [])
    
    console.log(content)
    console.log(posts)
    return (
        <Container>
            {auth ? (
                <>
                    <LeftContainer>
                        <LogoContainer>
                            <Image
                            src="/logo.png"
                            alt="Vercel Logo"
                            width={36}
                            height={36}
                            priority
                            />
                            <Title>Project<Title style={{color: '#fff'}}>Bird</Title></Title>
                        </LogoContainer>
                        <br />
                        Profile, etc.
                    </LeftContainer>

                    <RightContainer>
                        <form style={{width: '96%'}} onSubmit={handleFormSubmit}>
                            <PostHeader>
                                <PostBar
                                variant="standard"
                                size="small"
                                InputProps={{
                                    disableUnderline: true,
                                }}
                                value={content}
                                onChange={e => setContent(e.target.value)}
                                /> 
                                <SearchBtn type="submit">
                                    <SendIcon />
                                </SearchBtn>
                            </PostHeader>
                        </form>
                        
                        <FeedContainer>
                            {Array.isArray(posts) && posts.map(row => (
                                <PostContainer key={row.id}>
                                    <AuthorContainer>
                                        <b>{row.user.name}</b>
                                        {auth === row.user.name && 
                                            <OptionsContainer>
                                                <OptionBtn>
                                                    <EditIcon fontSize="small"/>
                                                </OptionBtn>
                                                <OptionBtn
                                                    onClick={() => delPost(row)}
                                                >
                                                    <DeleteIcon fontSize="small"/>
                                                </OptionBtn>                                               
                                            </OptionsContainer>
                                        }

                                    </AuthorContainer>
                                    <ContentContainer>{row.content}</ContentContainer>
                                </PostContainer>
                            ))}
                        </FeedContainer>
                    </RightContainer>
                </>
            ) : (
                <h1>Nothing</h1>
            )}
        </Container>
    )
}

export default Feed