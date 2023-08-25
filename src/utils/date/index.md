---
nav: utils
group: date
title: isYesterday
description: The isYesterday function is used to determine if a given date is yesterday. It takes a date parameter (which can be a string, number, or Date object) and an optional integer parameter n to specify the relative date offset from the current date. The default value for n is 1, indicating yesterday. The function compares the provided date with the date of yesterday, and if they share the same year, month, and day, it returns true; otherwise, it returns false.
---

Here's a detailed step-by-step explanation of the function:

Get the current date and store it in the curDate variable. Calculate the target date (defaulted to yesterday) by subtracting n days.
Create the tarDate variable to store the specified date based on the input date parameter. If no date parameter is provided, it defaults to the current date.
Create a string array called dateProperties containing the property names of the date object, including 'getFullYear', 'getMonth', and 'getDate'.
Use the .every function to iterate through each property name in the dateProperties array. For each property, store the corresponding property values of curDate and tarDate in variables and then compare them.
Return the comparison result. If all property values are the same, indicating that the given date is yesterday, the function returns true; otherwise, it returns false.

## Default

<code src="./demos/index.tsx" nopadding></code>
