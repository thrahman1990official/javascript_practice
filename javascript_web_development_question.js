/* Given two functions below, what will be there output? Select most accurate response */
/* Options: (1) Yes (2) No (3) foo1 will give run time error (4) foo2 will give run time error */

const foo1 = () =>
{
  return {
    bar: "foo1"
  };
}

const foo2 = () =>
{
  return
  {
    bar: "foo2"
  };
}

console.log(foo1())
/* above console.log(fool()) will return-> { bar: 'fool' } */
/* if you replace console.log(foo1()) with console.log(foo2()) */
/* than it will return-> undefined */
/* the reason is because the first loop the { is right next to the return */
/* whereas in the 2nd loop the { is right below the return */
/* but once you move the { right next to the return on it's right side just like in the first loop */
/* return { */
/* bar: "foo2" */
/* }; */

