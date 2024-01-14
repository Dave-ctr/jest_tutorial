const object = require( './object.js' )

test( 'object', () =>
{
  expect( object() ).toEqual( { name: 'dave' } )
} )