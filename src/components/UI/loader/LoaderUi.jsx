import React from 'react'
import { Spinner } from 'react-bootstrap'

// ? animation: border, grow
// ? variant: primary, secondary, success, danger, warning, info, light, dark

export const LoaderUi = ({ animation, variant }) => {
    return (
        <Spinner animation={animation} variant={variant} />
    )
}
