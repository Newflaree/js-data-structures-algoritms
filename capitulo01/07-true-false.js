function testTruthy( val ) {
  return val ? console.log( 'trustry' ) : console.log( 'falsy' );
}

testTruthy( true ); // true
testTruthy( false ); // false
testTruthy( new Boolean( false ) ); // true (Los objetos siempre son true)

testTruthy( '' ); // false
testTruthy( 'Packt' ); // true
testTruthy( new String( '' ) ); // true (Los objetos siempre son true)

testTruthy( 1 ); // true
testTruthy( -1 ); // true
testTruthy( NaN ); // false
testTruthy( new Number( NaN ) ); // true (Los objetos siempre son true)

testTruthy( {} ); // true (Los objetos siempre son true)

var obj = { name: 'John' };
testTruthy( obj ); // true
testTruthy( obj.name ); // true
testTruthy( obj.age ); // false ( la variable age no existe )
