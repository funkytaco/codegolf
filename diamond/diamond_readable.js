function mirror(i) {
    diamond = '123456789';
    str = diamond.substring(0,i);
    len = str.length;
    if (len > 1) {
    o = str +  reverse(str);
    } else {
    o = str;
    }
    sum = 1;
    return Array(12 - len).join(" ") + o;
}

function reverse(s) {
  for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) { }
  return o;
}

for (i=1;i<10;i++){
     console.log(mirror(i));    
}
for (i=8;i>0;i--){
    console.log(mirror(i));
}