var Palin_Check = (str) =>
{
	  let i = 0, j = str.length - 1
 
        while (i < j) {
 
            	if (str.charAt(i) != str.charAt(j))
                return "False"
 	    i++
            j--
        }
        return "True"
}

