export default function AboutLayout({ children }) {
  return (
    <div>
      <p>
        this layout is only visible on the about page and its children like ,team..
      </p>
      {children}
    </div>
  )
}
