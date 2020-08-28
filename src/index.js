import React from 'react'
import styles from './styles.module.css'
import Card from './components/Card'

export const GitHubCard = ({ username }) => {
  return (
    <div className={styles.test}>
    <Card username = {username}/>
    </div>
  )
}
