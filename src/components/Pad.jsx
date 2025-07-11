const Pad = ({color, on}) => {

  return (

    <button style={{backgroundColor: color}} className={on ? "on" : ""}></button>
  )
}

export default Pad