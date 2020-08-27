import React from 'react'

import styles from '../styles.module.css'
class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            result:null,
            showFollowers: true

        }
    }
    componentDidMount(){
        fetch(`https://api.github.com/users/${this.props.username}`).then(res => res.json()).then(result => {
            console.log(result)
            this.setState({result})
        })
        console.log(this.props.username,"c")
        // if (!this.props.showFollowers) {
        //     const showFollowers = this.props.showFollowers
        //     console.log(showFollowers,'show')
        //     this.setState({showFollowers})
        // }
        console.log(this.state.showFollowers)
    }
    render(){
        if (this.state.result) {
            const {avatar_url,bio,public_repos,html_url,login,name,following,followers} = this.state.result;
            return(
                <div className={styles.card} style={{width:"300px"}}>

                    <div className={styles.content}>
                    <div className={styles.cover}>
                        {/* <img src={require("../assets/github-icon.png")} alt="logo"></img> */}
                        <h2 style={{color:"white"}}>GitHub</h2>
                    </div>

                        <img src={avatar_url}className={styles.image}/>
                        <div className={styles.container}>
                        <h2><b>{name}</b></h2>
                        <a href={html_url} target="_blank" className={styles.link}><h4 className={styles.login}>@{login}</h4></a>
                    <p className={styles.bio}><b>{bio}</b></p>
                    </div>
                </div>
                <div className={styles.infoWrapper}>
                    {this.state.showFollowers? 
                    <div className={styles.item}>
                        <h4>{followers}</h4>
                        <h5>Followers</h5>
                    </div>
            : null }
                    <div className={styles.item}>
                    <h4>{following}</h4>
                        <h5>Following</h5>
                    </div>
                    
                    <div className={styles.item}>
                    <h4>{public_repos}</h4>
                        <h5>Repositores</h5>
                    </div>
                </div>
                </div>
            )
        } else {
            return (<div>
                Loading
            </div>)
        }
        
    }
}
export default Card;