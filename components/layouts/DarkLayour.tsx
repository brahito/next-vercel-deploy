import { FC } from "react"

export const DarkLayour: FC = ({children}) => {
    return (
        <div style={{backgroundColor: 'rgba(0,0,0,0.3', padding: '10px', borderRadius: '5px',}}>
            <h3>Dark Layout</h3>
            {children}
        </div>
    )
}
