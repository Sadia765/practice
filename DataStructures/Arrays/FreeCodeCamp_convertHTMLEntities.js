/*Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/
function convertHTML(str) {
  // &colon;&rpar;
  var newList = str.split('');
  for(var i = 0; i<newList.length; i++){
    if(newList[i] == '&'){
      newList[i] = '&amp;';
    }
    else if(newList[i]== '<'){
      newList[i] = '&lt;';
    }
    else if(newList[i]== '>'){
      newList[i] = '&gt;';
    }
    else if(newList[i] == '"'){
      newList[i] = '&quot;' ;
    }
    else if(newList[i]== "'"){
      newList[i] = '&apos;';
    }
  }
  return newList.join('');
}

convertHTML("Dolce & Gabbana");
convertHTML("Dolce & Gabbana") //should return Dolce &amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") //should return Hamburgers &lt; Pizza &lt; Tacos.
convertHTML("Sixty > twelve") //should return Sixty &gt; twelve.
convertHTML('Stuff in "quotation marks"') //should return Stuff in &quot;quotation marks&quot;.
convertHTML("Schindler's List") //should return Schindler&apos;s List.
convertHTML("<>") //should return &lt;&gt;.
convertHTML("abc") //should return abc.