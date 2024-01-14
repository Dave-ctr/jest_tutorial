const fetchData = require( './promise.js' )

test( 'testing promise', () =>
{

  return fetchData().then( ( data ) =>
  {
    expect( data ).toBe( 'hello' )
  } )
} )