import React,{Component} from 'react';
import Header from '../../common/header/Header';
import  './Home.css';
import { ImageList } from '@material-ui/core';
import { ImageListItem } from '@material-ui/core';
import moviesData from '../../common/moviesData';
import { ImageListItemBar } from '@material-ui/core';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

   const style= {
       upcomingMoviesHeading : {
        textAlign: 'center',
        background: '#ff9999',
        padding: '8px',
        fontSize: '1rem'
       },
       gridListUpcomingMovies: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        width: '100%'
    },
    gridListMain: {
        transform: 'translateZ(0)',
        cursor: 'pointer'
    }
    }

class Home extends Component{
    state={
       upcoming :[
           
       ]  ,
       released:[]
    


    }
    componentDidMount() {
    //moviesData;
    
    let poster_url1=[];
    let title1=[];
       // console.log(moviesData);
        
          Object.entries(moviesData).map(item => {
            console.log(this.state.upcoming);
            let movieDetail={id:"",poster_url:"",title:"" ,releasedDate:""}

           // console.log(typeof item[1].poster_url);
           const copyofState=this.state.upcoming;
           movieDetail.poster_url=item[1].poster_url
          movieDetail.title=item[1].title;
          movieDetail.releasedDate=item[1].release_date;
          movieDetail.id=item[1].id;
           copyofState.push({...movieDetail});
           this.setState({upcoming:copyofState ,released:copyofState});

           console.log(this.state.upcoming);
           console.log(this.state.released)
        
            

          })
         // this.setState({poster_url:poster_url1});
          //console.log(this.state.poster_url);
         // this.state.title=title1;
         // console.log(this.state.title);
    }
    movieClickHandler = (id) => {
        //Changed /movie/id to /movies/id 
    
    }
   
    render(){
        console.log("render");
        return <div>
       <Header></Header>
        <div style={style.upcomingMoviesHeading}>
                    <span>Upcoming Movies</span>
        </div>
        
        
        <GridList cols={6} style={style.gridListUpcomingMovies} >
                    {this.state.upcoming.map(movie => (
                        <GridListTile key={"upcoming" + movie.title}>
                            <img src={movie.poster_url} className="movie-poster" alt={movie.title} />
                            <GridListTileBar title={movie.title} />
                        </GridListTile>
                    ))}
                </GridList>
                <div className="flex-container">
                    <div className="left">
                        <GridList cellHeight={350} cols={4} style={style.gridListMain}>
                            {this.state.released.map(movie => (
                                <GridListTile onClick={() => this.movieClickHandler(movie.movieid)}  className="released-movie-grid-item"  key={movie.releasedDate}>
                                    <img src={movie.poster_url} className="movie-poster" alt={movie.title} />
                                    <GridListTileBar
                                        title={movie.title}
                                        subtitle={<span>Release Date: {new Date(movie.releasedDate).toDateString()}</span>}
                                    />
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>
                    <div className="right">
                        
                    </div>
                    </div>

       
    
        
        
        </div>
    }
}
export default Home;