const Pad = ({color, on}) => {

  return (

    /**
     * Challenge part 3:
     * Our buttons got turned off by default! Update the code
     * so if the button is "on", it has the className of "on".
     */


    <button style={{backgroundColor: color}} className={on ? "on" : ""}></button>
  )
}

export default Pad