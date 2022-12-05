import CoolestHeading from "../components/CoolestHeading"
import Card from "../components/Card"

export default function Page() {
  return (
    <>
      <CoolestHeading text="Guides(WIP)" />
      <div className="w-[100%] flex flex-col sm:flex-row mt-8 mb-8  justify-evenly items-center">
        <Card />
        <Card />
      </div>
    </>
  );
}
