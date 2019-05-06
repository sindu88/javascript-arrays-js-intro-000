var chocolateBars=["snickers","hundred grand","kitkat","skittles"];
function addElementToBeginningOfArray(array,num)
{

newArr=  [1,...array];
return newArr;
}
function destructivelyAddElementToBeginningOfArray(array,num)
{
  array.unshift(1);
  return array;

}
function addElementToEndOfArray(array,num)
{

newArr=  [...array,1];
return newArr;
}
function destructivelyAddElementToEndOfArray(array,num)
{
  array=array.push(1);
  return array;

}

function accessElementInArray(array,index)
{
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array)
{
  array.shift();
  return array;

}
function removeElementFromBeginningOfArray(array)
{
array=  array.slice(1);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array)
{
  array.pop();
  return array;
}
function removeElementFromEndOfArray(array)
{
  array=array.slice(0,array.length-1);
  return array;
}
