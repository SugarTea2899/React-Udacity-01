import React from "react";

function Book({ title, author, imageUrl, id, handleUpdateBook, shelf }) {
  const handleChange = async (event) => {
    const value = event.target.value;
    console.log(value);
    await handleUpdateBook({ id }, value);
  };

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${
              imageUrl ??
              "https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg"
            }")`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select id={id} onChange={handleChange} defaultValue={shelf ?? ""}>
            <option value="" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            {shelf ? <option value="none">None</option> : <></>}
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{author}</div>
    </div>
  );
}

export default Book;
