import React from 'react'
import { isOdd, image } from '../../utils'
function Section1(props) {
    return (
        <section className={isOdd(props.index) ? 'reverse' : ''}>
            <div className="image">
                <img src={require(`../../images/${image(document.body.clientWidth)}/${props.section.image}`).default} alt="egg" />
            </div>
            <div className="text-item center content-start column">
                <h1>{props.section.title}</h1>
                <p>
                    {
                        props.section.description
                    }
                </p>
                <a href="#">Learn More</a>
            </div>
        </section>
    )
}
export default Section1