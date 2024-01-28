import { useEffect, useState } from "react"
import { 
    Container,
    LeftContainer,
    RightContainer
} from "./styledComponents"
import { useRouter } from "next/router"

const Feed = () => {
    const router = useRouter()
    const {auth} = router.query

    return (
        <Container>
            {auth ? (
                <>
                    <LeftContainer>
                        Logo + Project Bird
                        <br />
                        Profile, etc.
                    </LeftContainer>

                    <RightContainer>
                        Text Field 
                        <br />
                        Posts
                    </RightContainer>
                </>
            ) : (
                <h1>Nothing</h1>
            )}
        </Container>
    )
}

export default Feed