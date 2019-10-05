import React from 'react';

function List({users}){
return (<div className="">
{
	users.map(user => (<div key={user.id}>{user.name}</div>))
}
</div>)
}

export default List;