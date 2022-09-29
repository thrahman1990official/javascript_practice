/* Given two functions below, what will be there output? Select most accurate response */
/* Options: (1) Yes (2) No (3) foo1 will give run time error (4) foo2 will give run time error */

const foo1 = () =>
{
  {
    bar: "foo1"
  };
}

const foo2 = () =>
{
  {
    bar: "foo2"
  };
}

console.log(foo1())
/* above console.log(fool()) will return-> { bar: 'fool' } */
/* if you replace console.log(foo1()) with console.log(foo2()) */
/* than it will return-> undefined */
