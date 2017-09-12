var box = [
  { nails: 5 },
  { drills: 2 },
  { hammers: 1 }
];

function clone(value) {
  var clone = value;
  return clone;
}
var clonedBox = clone(box);
//should return a copy of the box
clonedBox[0] === box[0]
//should return true
