import s from './PageTitle.module.scss'

const PageTitle = props => {
  const { className, title } = props
  return (
    <h2 className={`${s['page-title']}  ${className ? className : 'mb-5'}`}>
      {title}
    </h2>
  )
}

export default PageTitle
