const fetchData = require( './callbackFunction.js' )

test( 'testing callback function', ( done ) =>
{
  function callback( data )
  {
    try
    {
      expect( data ).toBe( 'fetchedData' )
      done()
    }
    catch ( error )
    {
      done( error )
    }
  }
  fetchData( callback )
}
)