var chocolateBars=["snickers","hundred grand","kitkat","skittles"];
fucntion addElementToBeginningOfArray(array,num)
{

newArr=  [1,...array];
return newArr;
}
fucntion destructivelyAddElementToBeginningOfArray(array,num)
{
  array.unshift(1);
  return array;

}
