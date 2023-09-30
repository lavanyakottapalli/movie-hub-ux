import React from 'react';

const Search = (props) => {
    return (
        <div className='container-fluid'>
            <div className="input-group mt-5">
                <div className='mx-auto input-large'>
                    <input type="text" style={{ width: '600px', height: '50px' }}  class="cold-sm-5 form-control rounded-pill" placeholder="Search Movies.." aria-describedby="basic-addon1" value={props.value}
                        onChange={(event) => props.setSearchValue(event.target.value)}>
                    </input>
                </div>
            </div>
        </div>
    );
};

export default Search;