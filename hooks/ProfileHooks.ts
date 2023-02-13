

export async function DeleteGuide(id:string){
    if(!id){
        throw new Error('Something went wrong.')
    }
        const resp = await fetch("/api/guides/delete_guide", {
            method: "DELETE",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(id)
        })
        const msg = await resp.json()
        return msg 
}
export async function DeleteComment(id:string){
    if(!id){
        throw new Error('Something went wrong.')
    }
    const resp = await fetch("/api/comments/delete_comment", {
        method: "DELETE",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(id)
    })
    const msg = await resp.json()
    return msg 
}
export async function EditComment(id:string, message:string){
    if(!id || !message){
        throw new Error('Something went wrong.')
    }

    const resp = await fetch("/api/comments/update_comment", {
        method: "PATCH",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({id, message})
    })
    const msg = await resp.json()
    return msg 
}
export async function EditGuide(){
    
}