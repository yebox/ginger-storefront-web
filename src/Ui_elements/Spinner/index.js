import { RotatingLines } from "react-loader-spinner"
export const Spinner = ({
    width = 96,
    height = 96,
    strokeWidth = 2,
    color
}) => {
    return (
        <RotatingLines
            visible={true}
            height={width}
            width={height}
            color={color || "var(--primary-color)"}
            strokeColor={color || "var(--primary-color)"}
            strokeWidth={strokeWidth}
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
    )
}