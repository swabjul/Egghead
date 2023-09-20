import React from "react";

export default function Card(props) {
  let badgeText
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
    badgeText = "ONLINE"
  }


 return (
    <div className="card--items">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`/img/${props.coverImg}`} alt={`${(props.coverImg).slice(0, -4)}`} />
      <div className="card--stats">
        <img src="/img/star.png" />
        <span className="card--rating">{(props.stats.rating).toFixed(1)}</span>
        <span>({props.stats.reviewCount})</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
          <circle cx="1" cy="1" r="1" fill="#918E9B"/>
        </svg>
        <span>{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
    </div>

  )
}