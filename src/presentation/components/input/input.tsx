import React from 'react'
import Styles from './input-styles.scss'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props) => {
  return (
    <div className={Styles.inputWrap}>
      <input {...props} readOnly onFocus={event => {
        event.target.readOnly = false
      }} />
      <span className={Styles.status}>🔴</span>
    </div>
  )
}
export default React.memo(Input)
