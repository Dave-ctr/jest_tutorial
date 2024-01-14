const string = require( './string.js' )

test( 'string as function output', () =>
{
  expect( string( "hello world" ) ).toMatch( 'hello world' )
} )

test( 'string as variable', () =>
{
  expect( stringAsVariable ).toMatch( 'hello variable' )
} )

test( 'string as variable', () =>
{
  expect( stringAsVariable ).not.toMatch( 'hello world' )
} )

test( 'string as variable with regex', () =>
{
  expect( stringAsVariable ).toMatch( /ll/ )
} )