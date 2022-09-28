import s from './PageTitle.module.scss'

const PageTitle = props => {
  return (
    <h2
      className={`${s['page-title']}  ${
        props.className ? props.className : 'mb-5'
      }`}>
      {props.title}
    </h2>
  )
}

export default PageTitle
