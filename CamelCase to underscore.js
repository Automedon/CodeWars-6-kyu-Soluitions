/*
Description:
You wrote all your unit test names in camelCase. But some of your colleagues have troubles reading these long test names. So you make a compromise to switch to underscore separation.

To make these changes fast you wrote a class to translate a camelCase name into an underscore separated name.

Implement the ToUnderscore() method.

Example:

"ThisIsAUnitTest" => "This_Is_A_Unit_Test"

But of course there are always special cases...

You also have some calculation tests. Make sure the results don't get splitted by underscores. So only add an underscore in front of the first number.

Also Some people already used underscore names in their tests. You don't want to change them. But if they are not splitted correct you should adjust them.

Some of your colleagues mark their tests with a leading and trailing underscore. Don't remove this.

And of course you should handle empty strings to avoid unnecessary errors. Just return an empty string then.

Example:

"Calculate15Plus5Equals20" => "Calculate_15_Plus_5_Equals_20"

"This_Is_Already_Splitted_Correct" => "This_Is_Already_Splitted_Correct"

"ThisIs_Not_SplittedCorrect" => "This_Is_Not_Splitted_Correct"

"_UnderscoreMarked_Test_Name_" => _Underscore_Marked_Test_Name_"
*/
const toUnderScore = name => {
  return name.replace(/([A-Z]|\d+)/g,'_$1').replace(/^_/,'').replace(/__/g,'_')
}
