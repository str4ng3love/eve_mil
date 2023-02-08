export async function DeleteGuide(id:string){

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