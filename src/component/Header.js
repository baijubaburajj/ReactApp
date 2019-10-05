import React from 'react';

function Header({title, subtitle, handler}){
return (<div className="Header"><h1>{title}</h1><h3>{subtitle}</h3>
<input type="search" onChange={handler} />
</div>)

}

export default Header;