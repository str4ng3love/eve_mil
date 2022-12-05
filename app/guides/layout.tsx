import Wrapper from "../components/Wrapper";

export default function Layout({children}:{children:React.ReactNode}){
    return(
        <Wrapper>
            {children}
        </Wrapper>
    )
}