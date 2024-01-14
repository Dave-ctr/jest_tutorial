const product = require( './beforeEach.js' )
const common = require( './common.js' )

beforeEach( () =>
{
  console.warn( common() )
} )

test( 'testing product function', () =>
{
  expect( product() ).toBe( 200 )
} )

test( 'testing product function 2', () =>
{
  expect( product() ).toBe( 200 )
} )

test( 'testing product function 3', () =>
{
  expect( product() ).toBe( 200 )
} )