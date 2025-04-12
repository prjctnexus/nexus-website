interface LoadingElementProps {
  hidden?: boolean;
}

export default function LoadingElement({ hidden = false }: LoadingElementProps) {
    return (
        <div className={`col-span-full ${hidden ? "hidden" : "flex"} items-center justify-center`}>
          <div className="inline-block size-12 border-4 border-zinc-500 border-b-transparent rounded-full animate-spin"></div>
        </div>
    )
}