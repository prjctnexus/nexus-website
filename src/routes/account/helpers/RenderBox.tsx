import { ReactNode } from "react";

interface RenderBoxProps {
    children: ReactNode;
    visible: boolean
}

export default function RenderBox({ children, visible }: RenderBoxProps) {
    return (
        <div className={
            "w-screen h-[calc(100vh-151.2px)] lg:right-0 lg:top-[96px] lg:h-[calc(100vh-96px)] lg:w-[calc(100vw-277px)] " +
            (visible ? "hidden" : "absolute")
        }>{children}</div>
    )
}