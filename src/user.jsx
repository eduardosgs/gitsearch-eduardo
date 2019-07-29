import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class UserComponent extends React.Component {
    
    componentDidMount() {      

        document.getElementById('resultRepos').innerHTML = ""

        axios.get(this.props.props.user.repos_url)
        .then(function(response) {

            response.data.map(e => {
            
                return ( document.getElementById('resultRepos').innerHTML += `
                    <p class="nameRepos">${e.name}</p>
                    <p class="descritionRepos">${e.description}</p>
                    <p class="startRepos">${e.stargazers_count}</p>
                `)
            })
            
        }).catch(error => {
    
        console.log(error);
        });
    }

    componentDidUpdate() {

        document.getElementById('resultRepos').innerHTML = ""
        
        axios.get(this.props.props.user.repos_url)
        .then(function(response) {

            response.data.map(e => {
            
                return ( document.getElementById('resultRepos').innerHTML += `
                    <p class="nameRepos">${e.name}</p>
                    <p class="descritionRepos">${e.description}</p>
                    <p class="startRepos">${e.stargazers_count}</p>
                `)
            })
            
        }).catch(error => {
    
        console.log(error);
        });
    }

    render() {

        return (
                <React.Fragment>
                    
                    <Redirect to="/result" />

                    <div className="row mt-4">
                        <div className="col-4">

                            <img alt="" width="260" height="260" className="" src={this.props.props.user.avatar_url} />
                            <p>{this.props.props.user.name}</p>
                            <p>{this.props.props.user.login}</p>
                            <p>{this.props.props.user.location}</p>
                            <p>{this.props.props.user.company}</p>
                            <p>Seguindo: {this.props.props.user.following}</p>
                            <p>Seguidores: {this.props.props.user.followers}</p>

                        </div>

                        <div className="col-8">
                            <div id="resultRepos"></div>
                        </div>
                    </div>
        
                </React.Fragment>
        )
    }

}
export const User = UserComponent;