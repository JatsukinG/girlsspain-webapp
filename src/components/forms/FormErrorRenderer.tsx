import type {FC, PropsWithChildren} from "react";


const FormErrorRenderer: FC<PropsWithChildren> = ({children}) => {
    return (
        <div style={{minHeight: '1.5em'}}>
            {children}
        </div>
    )
}

export default FormErrorRenderer