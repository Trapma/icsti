import React from 'react'

export const BadgesUi = ({ children, color, isRounded }) => {
    const badge = ['badge', 'mx-1']
    if (isRounded) {
        badge.push('rounded-pill')
    }
    color ? badge.push(color) : badge.push('bg-secondary')

    return (
        <span class={badge.join(' ')}>{children}</span>
    )
}
