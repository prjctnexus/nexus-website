interface LoadingElementProps {
  hidden?: boolean;
  size?: number;
}

export default function LoadingElement({ hidden = false, size = 12 }: LoadingElementProps) {
    return (
        <div className={`col-span-full ${hidden ? "hidden" : "flex"} items-center justify-center`}>
          <div className={`inline-block size-${size} border-4 border-zinc-500 border-b-transparent rounded-full animate-spin`}></div>
        </div>
    )
}