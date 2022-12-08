
export enum EType {
  subtitle,
  paragraph,
  img,
  video
}
interface Props {
  type: EType;
}

export default function FormComponent(props: Props) {
  return <>
    {props.type === 0? <div>sub</div>: <></>}
    {props.type === 1? <div>par</div>: <></>}
    {props.type === 2? <div>img</div>: <></>}
    {props.type === 3? <div>vid</div>: <></>}
  </>;
}
