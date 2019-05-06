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
  array.push(1);
  return array;

}
