import '../app.css'

// eslint-disable-next-line react/prop-types
export function Screen ({ calcForScreen }) {
  return (
    <>
      <div className="screen">{calcForScreen}</div>
    </>
  )
}
