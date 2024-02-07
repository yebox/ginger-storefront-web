import { Puff } from "react-loader-spinner"
export const Spinner = ({ color }) => {
    return (
        <Puff
            visible={true}
            height="20"
            width="20"
            color={color || "#ffffff"}
            ariaLabel="loading"
        />
    )
}