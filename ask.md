let result;
for (let i = 10; i <= 30; i += 10) {
  const pulleyUnion = union(debugBearing608(), pulley()).translate([15, 15, i]);
  if (!result) {
    result = pulleyUnion;
  } else {
    result = union(result, pulleyUnion);
  }
}

cleaner way to do this? Lets make an array of them and then push them to an array
and then do the spread operation to make result with union{... whatever}

Certainly! You can create an array to store the individual pulley unions and then use the spread operator to combine them into a single union. Here's how you can do it:

```javascript
let result;
const pulleyUnions = [];

for (let i = 10; i <= 30; i += 10) {
  const pulleyUnion = union(debugBearing608(), pulley()).translate([15, 15, i]);
  pulleyUnions.push(pulleyUnion);
}

result = union(...pulleyUnions);
```

In this code:
1. We initialize an empty array `pulleyUnions` to store each `pulleyUnion`.
2. We loop through the desired range and create each `pulleyUnion`, translating it as needed, and then push it into the `pulleyUnions` array.
3. Finally, we use the spread operator `...` to pass all elements of the `pulleyUnions` array as arguments to the `union` function, combining them into a single result.

This approach is cleaner and more modular.