import React, { ReactNode } from 'react'

/**
 * Card component
 * @param {{children: ReactNode, tag: string}}
 * @returns JSX component
 */
const Card = ({ children, tag = 'article' }) => {
  const TagName = tag
  return (
    <TagName>
      {children}
    </TagName>
  )
}

export {
  Card
}