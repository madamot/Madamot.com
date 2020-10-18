import React from "react"
import { Link } from "gatsby"


export default ({ slice }) =>
  <div>
    <div>

      {
        (slice.primary.link_item.raw.link_type == "Document")
          ? <Link style={{
          }} to={slice.primary.link_item.raw.type + "/" + slice.primary.link_item.raw.slug}>
            <div style={{
              padding: '20px',
              border: '',
              boxShadow: '5px 10px 18px #888888',
              display: 'flex',
            }}>
              <div style={{
                margin: '10px',
                fontSize: '2.5em'
              }}>
                &#128279;
              </div>
              <h2 style={{
                fontWeight: '300',
                borderBottom: '1px solid black'
              }}>{slice.primary.link_item.raw.slug}</h2>
            </div>
          </Link>
          : <a href={slice.primary.link_item.url}>
            <div
              style={{
                fontStyle: 'italic',
                font: 'bold',
                color: 'blue',
              }} dangerouslySetInnerHTML={{ __html: slice.primary.link_item.url }} />
          </a>
      }
    </div>
  </div>
