var s = '';

for(var i = 10; i > 0; i--)
{
  for(var j = 0; j < i; j++)
  {
    s += ' ';
  }

  for(var k = 10; k >= i; k--)
  {
    s += '*';
  }
s += '\n';
}
console.log(s);
