import s from "./../styles/Error.module.scss"

const Error = ({ message }) => {
   return (
      <div className={s.error}>
        <h2>An error Ocurred: <span>{message}</span></h2>
        {/* <h3>{message}</h3> */}
      </div>
   )
}

export default Error
