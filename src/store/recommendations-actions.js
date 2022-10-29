import { recomActions } from './recommendations-slice'

export const fetchRecommendationsData = () => {
  return async dispatch => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_FIREBASE_DATABASE_URL}/recommendations.json`
      )

      if (!response.ok) {
        throw new Error('Could not fetch cart data!')
      }

      const data = await response.json()

      return data
    }
    try {
      const recomData = await fetchData()
      dispatch(
        recomActions.replaceItems({
          items: recomData,
        })
      )
    } catch (err) {}
    dispatch(recomActions.render())
  }
}

export const sendRecommendationsData = async recommendations => {
  await fetch(
    `${process.env.REACT_APP_FIREBASE_DATABASE_URL}/recommendations.json`,
    {
      method: 'PUT',
      body: JSON.stringify(recommendations),
    }
  )
}
