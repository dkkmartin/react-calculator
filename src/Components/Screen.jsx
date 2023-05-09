import '../app.css'

// eslint-disable-next-line react/prop-types
export function Screen ({ calculation }) {
  return (
    <>
      <div className="screen">{calculation}</div>
    </>
  )
}
