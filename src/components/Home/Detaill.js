export default function Detail({ bookDetail, editable }) {
    if (!bookDetail) return <div>No existe este libro</div>;
  
    const inputFields = Object.entries(bookDetail).map(([key, value]) => (
      <div key={key}>
        <label>{key}: </label>
        <input type="text" name={key} value={value} />
      </div>
    ));
  
    return (
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{bookDetail.title}</h5>
          {editable ? (
            <form>
              {inputFields}
            </form>
          ) : (
            <div>
              <p className="card-text"><strong>carMaker: </strong>{bookDetail.carMaker}</p>
              <p className="card-text"><strong>carModel: </strong>{bookDetail.carModel}</p>
              <p className="card-text"><strong>Publisher: </strong>{bookDetail.publisher}</p>
              <p className="card-text"><strong>Genre: </strong>{bookDetail.genre}</p>
              <p className="card-text"><strong>Available Online: </strong>{bookDetail.availableOnline}</p>
              <p className="card-text"><strong>Price: </strong>{bookDetail.price}</p>
              <p className="card-text"><strong>Summary: </strong>{bookDetail.summary}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
  