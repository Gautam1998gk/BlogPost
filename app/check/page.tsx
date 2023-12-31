// app/page.js
import { compileMDX } from 'next-mdx-remote/rsc'

export default async function Home() {
  // Optionally provide a type for your frontmatter object
  const { content, frontmatter } = await compileMDX<{ title: string }>({
    source: `---
      title: RSC Frontmatter Example
      ---
      # Hello World
      This is from Server Components!
    `,
    options: { parseFrontmatter: true },
  })
  console.log(content)
  return (
    <>
      <h1>{frontmatter.title}</h1>
      {content}
    </>
  )
}