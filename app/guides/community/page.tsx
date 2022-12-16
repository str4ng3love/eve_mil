import Card from "../../components/Card";
import Toolbar from "../../components/ui/Toolbar";

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center bg-gradient-to-bl from-slate-700 to-emerald-700 bg-fixed w-[100%] ">
        <div className="md:w-[75%] w-[100%] bg-black/80 text-white min-h-[calc(100vh-6rem)] shadow-backShadow">
          {/* dont like the toolbar - rework needed */}
          <Toolbar />
          <div className="grid gap-4 grid-cols-auto">
            <Card description="trala la" url="#" heading="Hello" />
            <Card description="trala la" url="#" heading="Hello" />
            <Card description="trala la" url="#" heading="Hello" />
            <Card description="trala la" url="#" heading="Hello" />
            <Card description="trala la" url="#" heading="Hello" />
          </div>
          {/* add toggle buttons */}
        </div>
      </div>
    </>
  );
}
