import React from 'react';

const Movies = (props) => {
    return (
        <>
            <div className='well text-center mt-5'>
                <div className='row'>
                    {props.movies.map((movie, index) => (
                        <div key={index} className='col-md-2 mt-2'>
                            <img style={{ width: '75%', height: '400px' }} className='img-fluid' key={index} src={movie.thumbnail} alt="No image" />
                            <p style={{ textAlign: 'center', color: 'white' }}>{movie.title} ({movie.year})</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Movies;