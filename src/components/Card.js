import React from 'react'

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result:null,
            showFollowers: true

        }
    }
    componentDidMount(){
        fetch(`https://api.github.com/users/${this.props.username}`).then(res => res.json()).then(result => {
            this.setState({result})
        })
    }


     style = {
        container: {
            padding: "2px 16px",
            width: "300px"
          },
        card: {
            width:"300px",
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
            transition: "0.3s",
            borderRadius: "5px",
            paddingBottom: "2px",
          },
          content: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center"
          },
          cover: {
            height: "40px",
            backgroundColor:"black",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          bio: {
            width: "90%",
            margin: "auto"
          },
          login: {
            color: "gray"
          },
          infoWrapper: {
            backgroundColor: "efefef",
            height: "50px",
            width: "90%",
            margin:"auto",
            marginBottom: "20px",
            marginTop: "20px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            borderRadius: "3%",
            borderTop: "5px solid black",
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"
          },
          item: {
            margin: "0 10px"
          },
          link: {
            textDecoration: "none",
            color:"black"
          },
          image: {
            borderRadius: "5px 5px 0 0",
            borderRadius: "50%",
            width: "50%",
            marginTop: "10px",
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"
          },
          header: {
              color: "white"
          },
          zeroMargin: {
              margin:"0"
          }
    }
    render(){
        if (this.state.result) {
            const {avatar_url,bio,public_repos,html_url,login,name,following,followers,repos_url} = this.state.result;
            return(
                <div  style={this.style.card}>
                    <div style={this.style.content}>
                    <div style={this.style.cover} >
                        {/* <img src={require("../assets/github-icon.png")} alt="logo"></img> */}
                        <h2 style={this.style.header}>GitHub</h2>
                    </div>

                        <img src={avatar_url} style={this.style.image}/>
                        <div style={this.style.container}>
                        <h2><b>{name}</b></h2>
                        <a href={html_url} target="_blank" style={this.style.link}><h4  style={this.style.login}>@{login}</h4></a>
                    <p  style={this.style.bio}><b>{bio}</b></p>
                    </div>
                </div>
                <div style={this.style.infoWrapper}>
                    {this.state.showFollowers? 
                    <div style={this.style.item}>
                        <h4 style={this.style.zeroMargin}>{followers}</h4>
                        <h5 style={this.style.zeroMargin}>Followers</h5>
                    </div>
                    : null }
                    <div style={this.style.item}>
                    <h4 style={this.style.zeroMargin}>{following}</h4>
                        <h5 style={this.style.zeroMargin}>Following</h5>
                    </div>
                    
                    <div style={this.style.item}>
                    <h4 style={this.style.zeroMargin}>{public_repos}</h4>
                        <h5 style={this.style.zeroMargin}>Repositories</h5>
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