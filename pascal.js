var x = new Array();
var y = '';

for(var i = 1; i <= 5; i++)
{
  for(var j = 1; j <= 5 - i; j++)
  {
    y += ' ';
  }

  x[i] = new Array();

  for(k = 1; k <= i; k++)
  {
  	if(k == 1 || k == i)
    {
    	x[i][k] = 1;
  	}
    else
    {
			x[i][k] = x[i - 1][k - 1] + x[i - 1][k];
   	}
    y += (x[i][k] + ' ');
  }
  y += '\n';
}
console.log(y);
