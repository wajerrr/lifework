import React from 'react';

export default (props) =>  
(<div>
<h2>{props.name}</h2>
<h2>{props.balance}</h2>
<button onClick={props.increment }>+</button>
<button onClick={props.decrement}>-</button>
{props.balance < 0 ? <h1>YOU ARE BROKE</h1>: null}
</div>
)

