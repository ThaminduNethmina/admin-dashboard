import { FaRegFaceSadTear } from "react-icons/fa6";

function NotFound() {
  return (
    <div className="flex flex-col gap-5 items-center justify-center mt-40">
        <FaRegFaceSadTear className="text-7xl text-white" />
        <h1 className="text-4xl text-white">404 Not Found</h1>
    </div>
  )
}

export default NotFound