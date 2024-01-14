const fetchData = () =>
{
  return new Promise( ( resolve, reject ) =>
  {
    setTimeout( () =>
    {
      resolve( 'hello' )
    }, 2000 )
  } )
}

module.exports = fetchData