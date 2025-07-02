<?php

require "./vendor/autoload.php";


$array = [];
var_dump(microtime(true));
for ($i = 0; $i <1000; $i++) {
    $SnowflakeId = (new \Godruoyi\Snowflake\Snowflake())->setStartTimeStamp(1443369600000)->id();
    $array[] = $SnowflakeId;
    usleep(200);
}
var_dump(microtime(true));
var_dump(count(array_unique($array)));
var_dump($array);




