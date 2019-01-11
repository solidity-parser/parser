### 0.4.0

 * Correctly handle non-existent tuple components. Thanks @maxsam4
 * Accept calldata as identifier

### 0.3.3

 * Add support for `address payable` typename.

### 0.3.2

 * Fix parsing of hex numbers with uppercase X.

### 0.3.1

 * Fix parsing of zero-component tuples.

### 0.3.0

 * Use `components` for all `TupleExpression` nodes. Earlier versions
   incorrectly stored tuple components under the `elements` key.
 * Fix parsing of decimal literals without integer part.
