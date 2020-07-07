# Card component

Renders out a `Card`, useful when showing multiple entities on a page in a list or other visual layout. By default, the `Card` will be a semantic HTML `article` element. But that can be changed by passing a different `tag` property.

```
import { Card } from '@bau-design/components-react'
const content = "Contents for my card. Some text, perhaps a title."

const defaultCard = () => {
  return (
    <Card>
      {content}
    </Card>
  )
}
// <article>
//   Contents for my card. Some text, perhaps a title.
// <article>

const divCard = () => {
  return (
    <Card tag="div">
      {content}
    </Card>
  )
}
// <div>
//   Contents for my card. Some text, perhaps a title.
// <div>
```

module.exports = {
  defaultCard,
  divCard
}
```