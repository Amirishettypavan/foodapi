import React from 'react'

export default function Food(props) {
    return (
        <div className='m-3 '>
            <div class="card" style={{width: "18rem"}}>
                <img class="card-img-top" src={props.img} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Name: {props.label}</h5>
                        <p class="card-text">Calories: {props.calories}</p>
                        <p class="card-text"> MealType: {props.mealType}</p>
                        <p class="card-text">DishType: {props.dishType}</p>
                        <a href={props.url} class="btn btn-primary">Recipe Link</a>
                        
                    </div>
            </div>
        </div>
    )
}
