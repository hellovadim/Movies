import React, {Component} from 'react';
import {Movies} from '../components/Movies';


class Main extends Component {
    state={
        movies: []
    }

    componentDidMount(){
        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=f853d707&s=matrix')
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search}))
    }

    render(){
        const {movies} = this.state;

        return (
            <main className="container content">
                {
                    movies.length ? (
                        <Movies movies={this.state.movies}/>        
                    ) : <h5>Loading</h5>
                }
            </main>  
          )
    }
}

export {Main};