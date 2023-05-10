import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

import Loading from "../components/Loading";
import Error from "../components/Error";

const Booking = () => {
    const { id } = useParams();
    const ID = +id;
    const URL = "https://api.tvmaze.com/shows";
  
    const { data: show, isError, isLoading } = useFetch(`${URL}/${ID}`);
    const { data: cast } = useFetch(`${URL}/${ID}/cast`);
    const { data: episodes } = useFetch(`${URL}/${ID}/episodes`);
    const { data: crew } = useFetch(`${URL}/${ID}/crew`);
  
    // show creators
    const Creators = () => {
      const creators = crew.filter((member) => member.type === "Creator");
      const creatorsNames = creators.map((member) => member.person.name);
  
      return (
        <>
        
          {creators.length === 0 && (
            <span className="text-danger"> Unknown </span>
          )}
          {creatorsNames.map((creator, index) => {
            if (index === creatorsNames.length - 1) {
              return (
                <span key={creator.id} className="text-danger">
                  {creator}
                </span>
              );
            } else {
              return (
                <span key={creator.id} className="text-danger">
                  {creator + ", "}
                </span>
              );
            }
          })}
        </>
      );
    };
  
    const {
      type,
      name,
      ended,
      image,
      genres,
      status,
      rating,
      summary,
      runtime,
      network,
      schedule,
      language,
      premiered,
      webChannel,
      officialSite,
    } = show;
  
    return (
        <div className="container show-details bg-white">

        {isLoading && <Loading text="Show details Loading..." />}
        {isError && <Error text="Something Went Wrong" />}
        {show && (
          <>
            <h2 className="show_title"> Book A ticket For {name}</h2>
            <div className="show-details-container">
              <div className="container-cart">
                <img
                  alt={name}
                  className="card-img-top"
                  src={image ? image.medium : "https://plchldr.co/i/210x295"}
                />
               
              </div>
  
              <div className="text-details">
                <h3 className="card-title">{name}</h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>Show Type: </strong>
                    {genres &&
                      genres.map((genre) => (
                        <span key={genre} className="btn btn-dark show-type">
                          {genre + " "}
                        </span>
                      ))}
                  </li>
                  <li className="list-group-item">
                    <strong>Status:</strong> {status ? status : "unknown"}
                  </li>
                  <li className="list-group-item">
                    <strong>Rating: </strong>
                    {rating ? rating.average : "No rating"}
                  </li>
                </ul>
                <div className="card-body">
                  {officialSite ? (
                    <a
                      className="btn btn-dark"
                      href={officialSite}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Official Site
                    </a>
                  ) : (
                    "No official site"
                  )}
                  <h5 className="summary">Summary:</h5>
                  <p>
                    {summary === null || summary === ""
                      ? "No Summary"
                      : summary && summary.replace(/(<([^>]+)>)/gi, "")}
                  </p>
                </div>
               
              </div>
  
              <div className="Booking-form">
              
              <div>Book Ticket for {name}</div>
              <ul>
              <li>
              <label>Select No of seats</label>
               <input type="text" placeholder="select setas ---"/>
               </li>
               <li>
               <label>Select seat type </label>
               <select>
                <option>Executive</option>
                <option>Premium Economy</option>
                <option>Economy</option>
               </select>
               </li>
               <button>Seat Matrix</button>
                <button>Next</button>
               </ul>
               
              
              </div>
            </div>
  
            
          </>
        )}
      </div>
    );
};

export default Booking;
