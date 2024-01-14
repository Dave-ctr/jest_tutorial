const fetchData = require( './asyncAwait.js' )

test( 'testing async await', async () =>
{
  const data = await fetchData()
  expect( data ).toBe( 'hello' )
} )
