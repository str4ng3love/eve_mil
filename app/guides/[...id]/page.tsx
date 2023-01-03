import { getGuide } from "../../../lib/fetching";

export default async function Page({ params }: { params: { id: string } }) {
    
    let id = params.id.at(-1) as string
    let decodedId = decodeURI(id)
    
   
const data = await getGuide(decodedId)
  return (
    <>
      <p>{data.title}</p>

    </>
  );
}
