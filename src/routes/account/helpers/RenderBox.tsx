import { ReactNode } from "react";

interface RenderBoxProps {
    children: ReactNode;
    visible: boolean
}

export default function RenderBox({ children, visible }: RenderBoxProps) {
    return (
        <div className={
            "w-screen h-[calc(100vh-127.2px)] overflow-scroll lg:right-0 lg:top-[96px] px-2 md:px-4 pt-3 lg:pt-0 lg:px-12 lg:h-[calc(100vh-96px)] lg:w-[calc(100vw-277px)] " +
            (visible ? "hidden" : "absolute")
        }>{children}</div>
    )
}