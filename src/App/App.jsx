import React from 'react';

export default (props) =>  
(<div>
<h2>{props.name}</h2>
<h2>{props.value}</h2>
<button onClick={props.increment }>+</button>
<button onClick={props.decrement}>-</button>
{props.value < 0 ? <h1>YOU ARE BROKE</h1>: null}
</div>
)

