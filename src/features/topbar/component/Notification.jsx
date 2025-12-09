import { BiBell } from "react-icons/bi";

const Notification = () => {
    return (
        <div>
            <button className="flex size-10 border border-zinc-300 rounded-full items-center justify-center
             cursor-pointer hover:text-white hover:bg-zinc-200">
                <BiBell className="text-[21px]" />
            </button>
        </div>
    )
}

export default Notification
