var s = '';
for( var i = 10; i > 0; i-- )
{
	for( var j = 0; j <= 10 - i; j++ )
	{
		s += ' ';
	}

	for( var k = 1; k < 2 * i; k++ )
	{
		s += '*';
	}
	s += '\n';
}
console.log(s);
