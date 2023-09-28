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
              <p className="card-text"><strong>car Maker: </strong>{bookDetail.carMaker}</p>
              <p className="card-text"><strong>car Model: </strong>{bookDetail.carModel}</p>
              <p className="card-text"><strong>car Year: </strong>{bookDetail.carYear}</p>
              <p className="card-text"><strong>Available Online: </strong>{bookDetail.available}</p>
              <p className="card-text"><strong>Price: </strong>{bookDetail.price}</p>
              <p className="card-text"><strong>Description: </strong>{bookDetail.description}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
  