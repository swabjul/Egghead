import React from "react"

export default function Card(props) {
  return (

    <section className="card">
      <figure className="card--image">
        <img src={props.imageUrl} alt={props.title} />
      </figure>
      <div className="card--text_area">
        <p className="card--location">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-dot" class="svg-inline--fa fa-location-dot card--location-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"></path></svg>
          {props.location} 
          <a href={props.googleMapsUrl}>View on Google Maps</a></p>
        <h2>{props.title}</h2>
        <p className="card--date">{props.startDate} - {props.endDate}</p>
        <p className="card-description">{props.description}</p>
      </div>
    </section>

  )
}