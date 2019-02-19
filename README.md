This assignment is not 100% complete. It could be improved a fair amount and be made cleaner. But it should show some of my technical ability. I have outlined details about what I think can be improved and descrepancies with the specification that I would need clarified to actually create a proper implementation.

## Setting up and running:
```
yarn install
yarn start
```

## Running tests
```
yarn run test
```

## Implementation discussion
- For the purposes of demonstration I used redux. Quite typically it is something that people want to see in an interview assesment. I think it may be adding a layer of complexity here that isn't needed.
- The grid can be reduced in size via App.js which will make things a little bit smoother and more clear.
- I purposely used hooks and avoiding components here. I like to use the latest in React and I very much like functional components now days over class components.
- There are a few tests, but ideally there would be more test coverage for full-implementation of the project.
- I used styled-components for styling. It is pretty popular right now and provides some advantages over css/sass or inline styling. It is quite magical and it can be used with React Native as well.

## Specificiations

The description of the project is quite brief and some things I think are open to interpretation (they need to be clarified). Normally I would ask for clarifcation instead of making assumptions, but below are my assumptions.

"When you click on a cell, all values in the cells in the same row and
column are increased by 1 or, if a cell was empty, it will get a value of 1."

I assume the following from this:
- Each cell has a value v >= 0.
- Clicking a cell at (x, y) will cause all values in column x to increase by 1 and it will cause all values in column y to increase by 1 as well. I am assuming that the cell at x, y should only increase by 1 too and not by 2 which is one interpretationt.

"If 5 consecutive numbers in the Fibonacci sequence are next to
each other, these cells will briefly turn green and will be cleared."

- I assume that there can be overlaps.
- I am assuming this is for rows and columns only as opposed to diagonals or a zigzag or such.
- By "clear" I am assuming that it means to reset the values to zero. I am uncertain whether "clear" in the context of the assesment means to remove the cells from the grid or reset the values.

Other things that need to be considered:
- should user be prevented from triggering an iteration in values when animations or processes are going on for the grid? The results could be potentially different since the grid is cleared asynchronously after a timeout. The clear could be triggered on different data than intended?

## Things that can be improved

- Performance of fib sequence detection. currently we do try to reduce the problem space by only checking sequences starting at indices near columns x and y, but we check for a sequence by seeing
if there is a row or a column that matches a subsequence starting at the index which adds some duplication.
- We should probably modify the cells directly so that the grid itself is not signalled for a change. This was an oversight on my part when making it and there are some rerenders on the grid that could be saved. React prevents the re-rendering of the cells that do not change as well.
- Due to how we clear out fib-sequences there is potential for some issues. We should probably halt user input to prevent iteration while values are potentially being cleared. There is currently a chance that a fib-sequence is detected due to a value no being cleared yet. There are other solutions, but halting user input would also prevent the user starting too many processes and clogging up there system.
- The animations are not 100% currently. Cells that are cleared probably should not be rendered as yellow.
- Redux I think should be reconsidered here. I think it may be more clear with a simpler system. I think currently that it adds a layer of complexity that isn't needed.
- I would add some static typing such as flow to help make sure things are correct.
- there are some constants within places to account for things such as '5 consecutive numbers' part or the coloring. This should be made to be more configurable and at the very least more meaningful.
- test should be extended.
- The naming of certain things such as action types could be improved.
- A linter should be added
