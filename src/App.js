import React from "react";
import PropTypes from "prop-types";


// function Movie({name, image, rating}) {
//     return (
//         <div>
//             <h1>{name}</h1>
//             <img src={image} alt={name}/>
//             <h4>{rating} / 5</h4>
//         </div>
//     )
// }

// function renderMovie(info){
//     return <Movie name={info.name} image={info.image}/>
// }

// const renderMovie = info => <Movie name={info.name} image={info.image}/>

// const movies = [
//     {
//         id: 1,
//         name: '백두산',
//         image: 'https://upload.wikimedia.org/wikipedia/ko/b/bc/%EB%B0%B1%EB%91%90%EC%82%B0_%EC%98%81%ED%99%94_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg',
//         rating : 3.5
//     },
//     {
//         id: 2,
//         name: '내이름은 칸',
//         image: 'https://upload.wikimedia.org/wikipedia/ko/c/c3/%EB%82%B4_%EC%9D%B4%EB%A6%84%EC%9D%80_%EC%B9%B8_%EC%98%81%ED%99%94_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg',
//         rating : 5
//     },
//     {
//         id: 3,
//         name: '기생충',
//         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQyf0f9OovF_HAgKcC4fx9AQX_qDkV9gVYIiw&usqp=CAU',
//         rating : 5
//     },
//     {
//         id: 4,
//         name: '괴물',
//         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-u1wz7ItBCTvhJH97ZFRvb_ZLP-2hWRbTtg&usqp=CAU',
//         rating : 4.5
//     }
// ];
//
// function App() {
//     return (
//         <div className="App">
//             {movies.map(info => <Movie key={info.id} name={info.name} image={info.image} rating={info.rating}/>)}
//         </div>
//     );
// }
//
// Movie.propTypes = {
//     name: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     rating: PropTypes.number.isRequired
// }

class App extends React.Component {
    state = {
        count: 0,
        value_num : 0
    }

    // add = () => {
    //     this.setState({count: this.state.count + 1 })
    // }
    //
    // minus = () => {
    //     this.setState({count: this.state.count - 1 })
    // }

    add = () => {
        this.setState(current => ({
                count: current.count + 1,
                value_num: current.value_num + 2
            })
        )
    }

    minus = () => {
        this.setState(current => ({
                count: current.count - 1,
                value_num: current.value_num - 2
            })
        )
    }

    render() {
        return (
            <div>
                <h1> the number is : {this.state.count} {this.state.value_num}</h1>
                <button onClick={this.add}> Add </button>
                <button onClick={this.minus}> Minus </button>
            </div>
        );

    }
}

export default App;
