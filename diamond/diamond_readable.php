<?php
function mirror($i) {
    $diamond = '123456789';
    $str = substr($diamond,0,$i);
    
    if (strlen($str > 1)) {
    $o = substr($str, 0, -1).  strrev($str);
    } else {
    $o = $str;
    }
    $sum = 1;
    return str_pad($o, $i +12, " ", STR_PAD_LEFT) .PHP_EOL;
}

for ($i=1;$i<10;$i++){
    print mirror($i);    
}
for ($i=8;$i>0;$i--){
    print mirror($i);
}
