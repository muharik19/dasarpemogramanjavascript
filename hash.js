var s = '';
var jmlhash = 10;
var kolom = 10;

for(var i = 1; i <= jmlhash; i++)
{
	for(var j = 1; j <= kolom; j++)
	{
		if((i % 2 == 1 && j % 2 == 1) || (i % 2 == 0 && j % 2 == 0))
		{
			s += ('#');
		}
		else
		{
			s += (' ');
		}
	}
s += '\n';
}
console.log(s);
