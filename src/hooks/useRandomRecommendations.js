import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const useRandomRecommendations = () => {
  const recommendations = useSelector(state => state.recommendations.items)
  const [randomCards, setRandomCards] = useState([])

  useEffect(() => {
    setRandomCards([...recommendations].sort(() => 0.5 - Math.random()))
  }, [recommendations])

  return randomCards
}

export default useRandomRecommendations
