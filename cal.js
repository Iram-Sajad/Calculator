function fun(i)
	{
      		document.getElementById('result').value+=i;
	}

	function show()
	{
          debugger;
		  temp=document.getElementById('result').value;
	      r=eval(temp);
	      document.getElementById('result').value=r;
	}

	function backspace()
	{
	    str=document.getElementById('result').value;
	    str=str.substring(0,str.length-1);
	    document.getElementById('result').value=str;
	}
	function clear2()
	{
	    document.getElementById('result').value="";

	}
	function leftbrace(i)
	{
      		document.getElementById('result').value+=i;
	}
	function rightbrace(i)
	{
      		document.getElementById('result').value+=i;
	}