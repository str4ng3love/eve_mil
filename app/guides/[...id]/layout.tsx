

export default function Layout({children}:{children:React.ReactNode}){
    return(
        <div className="min-h-[calc(100dvh_-_6rem)] flex flex-col items-center">
        
            {children}

        
        </div>
    )
}