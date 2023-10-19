import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import jsonData from './data/cars.json';
import './App.css';
import './Home.css';

const Mainpage = () => {
  const users = jsonData.users;
  const itemsPerPage = 6;
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const filteredUsers = users.filter((user) =>
    user.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedUsers = filteredUsers.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setPage(1);
  };

  return (
    <center>
      <div className="app">
        <form className="mainform" onSubmit={submitHandler}>
          <label className="wel">Cars Info...</label>
          <input
            type="text"
            className="searchi"
            value={search}
            onChange={handleSearchChange}
            placeholder="Search here"
          />
        </form>
        <div className="main">
          {displayedUsers.map((user) => (
            <li key={user.id}>
              <div className="elements">
                <img src={user.image} alt="image not found" />
                <strong>Make: </strong>
                {user.title}
                <br />
                <strong>Model:</strong> {user.model}
                <br />
                <strong>Type:</strong> {user.type}
                <br />
                <strong>Year: </strong>
                {user.year}
                <br />
                {console.log('Data being sent to RentPage:', user)}
                <Link to={`/rent/${user.id.toString()}`}>
                  <button type="submit">More</button>
                </Link>
              </div>
            </li>
          ))}
        </div>
        <div className="pagination">
          <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
            Pre..
          </button>
          <span>{`Page ${page} of ${totalPages}`}</span>
          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </center>
  );
};

export default Mainpage;
