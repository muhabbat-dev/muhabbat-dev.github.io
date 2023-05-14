import React from 'react'


const Markdown = ({type, text} : any) =>{ 
    return(
        <>
            {
                type == 'span' ? <span>{text}</span>:
                type == 'div'  ? <div>{text}</div>:
                type == 'normal'  ? <span>{text}</span>:
                type == 'h1'? <h1>{text}</h1>:
                type == 'h2'? <h2>{text}</h2>:
                type == 'h3'? <h3>{text}</h3>:
                type == 'h4'? <h4>{text}</h4>:
                type == 'h5'? <h5>{text}</h5>:
                type == 'b'? <b>{text}</b>:
                type == 'u'? <u>{text}</u>:
                type == 'i'? <i>{text}</i>:
                <p>{text}</p>
            }
        </>
    )
}

export default Markdown