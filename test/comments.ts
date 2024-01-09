import { assert } from 'chai'
import * as parser from '../src/index'

describe('Comments', () => {
  it('LineComment', function () {
    const ast: any = parser.parse('// LineComment', { comments: true })
    assert.deepEqual(ast.comments, [
      { type: 'LineComment', value: ' LineComment' },
    ])
  })

  it('LineComment with Location and Range', function () {
    const ast: any = parser.parse('// LineComment', {
      comments: true,
      loc: true,
      range: true,
    })
    assert.deepEqual(ast.comments, [
      {
        type: 'LineComment',
        value: ' LineComment',
        range: [0, 14],
        loc: {
          start: { line: 1, column: 0 },
          end: { line: 1, column: 14 },
        },
      },
    ])
  })

  it('LineComment within a LineComment', function () {
    const ast: any = parser.parse('// LineComment // LineComment', {
      comments: true,
      loc: true,
      range: true,
    })
    assert.deepEqual(ast.comments, [
      {
        type: 'LineComment',
        value: ' LineComment // LineComment',
        range: [0, 29],
        loc: {
          start: { line: 1, column: 0 },
          end: { line: 1, column: 29 },
        },
      },
    ])
  })

  it('BlockComment within a LineComment', function () {
    const ast: any = parser.parse('// LineComment /* BlockComment */', {
      comments: true,
      loc: true,
      range: true,
    })
    assert.deepEqual(ast.comments, [
      {
        type: 'LineComment',
        value: ' LineComment /* BlockComment */',
        range: [0, 33],
        loc: {
          start: { line: 1, column: 0 },
          end: { line: 1, column: 33 },
        },
      },
    ])
  })

  it('LineComment within a contract', function () {
    const ast: any = parser.parse(
      `contract test {
    //
    // LineComment
    //
}`,
      {
        comments: true,
        loc: true,
        range: true,
      }
    )
    assert.deepEqual(ast.comments, [
      {
        type: 'LineComment',
        value: '',
        range: [20, 22],
        loc: {
          start: { line: 2, column: 4 },
          end: { line: 2, column: 6 },
        },
      },
      {
        type: 'LineComment',
        value: ' LineComment',
        range: [27, 41],
        loc: {
          start: { line: 3, column: 4 },
          end: { line: 3, column: 18 },
        },
      },
      {
        type: 'LineComment',
        value: '',
        range: [46, 48],
        loc: {
          start: { line: 4, column: 4 },
          end: { line: 4, column: 6 },
        },
      },
    ])
  })

  it('BlockComment', function () {
    const ast: any = parser.parse('/* BlockComment */', { comments: true })
    assert.deepEqual(ast.comments, [
      {
        type: 'BlockComment',
        value: ' BlockComment ',
      },
    ])
  })

  it('BlockComment with Location and Range', function () {
    const ast: any = parser.parse('/* BlockComment */', {
      comments: true,
      loc: true,
      range: true,
    })
    assert.deepEqual(ast.comments, [
      {
        type: 'BlockComment',
        value: ' BlockComment ',
        range: [0, 18],
        loc: {
          start: { line: 1, column: 0 },
          end: { line: 1, column: 18 },
        },
      },
    ])
  })

  it('LineComment within a BlockComment', function () {
    const ast: any = parser.parse(
      `/*
  BlockComment
  // LineComment
*/`,
      {
        comments: true,
        loc: true,
        range: true,
      }
    )
    assert.deepEqual(ast.comments, [
      {
        type: 'BlockComment',
        value: '\n  BlockComment\n  // LineComment\n',
        range: [0, 37],
        loc: {
          start: { line: 1, column: 0 },
          end: { line: 4, column: 2 },
        },
      },
    ])
  })

  it('BlockComment within a contract', function () {
    const ast: any = parser.parse(
      `contract test {
    /*
     * BlockComment
     */
}`,
      {
        comments: true,
        loc: true,
        range: true,
      }
    )
    assert.deepEqual(ast.comments, [
      {
        type: 'BlockComment',
        value: '\n     * BlockComment\n     ',
        range: [20, 50],
        loc: {
          start: { line: 2, column: 4 },
          end: { line: 4, column: 7 },
        },
      },
    ])
  })

  it('Multiple Comments within a contract', function () {
    const ast: any = parser.parse(
      `pragma solidity ^0.4.24;

/**
 * @title Just for comments
 * @author Klaus Hott
 */
contract Comments {
  /* solhint-disable var-name-mixedcase */
IEIP712DomainSeparator private EIP712domainSeparator; // Trailing Comment
/* solhint-enable var-name-mixedcase */

    /// @notice Does nothing
    /// @dev just to show comments
    function() {
        // solhint-disable-previous-line no-empty-blocks
    } /*
       * comment trailing function
       */ /*
       * BlockComment trailing BlockComment
       */
}/*
* comment trailing function
*/ // LineComment trailing BlockComment`,
      {
        comments: true,
        loc: true,
        range: true,
      }
    )
    assert.deepEqual(ast.comments, [
      {
        type: 'BlockComment',
        value: '*\n * @title Just for comments\n * @author Klaus Hott\n ',
        range: [26, 83],
        loc: {
          start: { line: 3, column: 0 },
          end: { line: 6, column: 3 },
        },
      },
      {
        type: 'BlockComment',
        value: ' solhint-disable var-name-mixedcase ',
        range: [106, 146],
        loc: {
          start: { line: 8, column: 2 },
          end: { line: 8, column: 42 },
        },
      },
      {
        type: 'LineComment',
        value: ' Trailing Comment',
        range: [201, 220],
        loc: {
          start: { line: 9, column: 54 },
          end: { line: 9, column: 73 },
        },
      },
      {
        type: 'BlockComment',
        value: ' solhint-enable var-name-mixedcase ',
        range: [221, 260],
        loc: {
          start: { line: 10, column: 0 },
          end: { line: 10, column: 39 },
        },
      },
      {
        type: 'LineComment',
        value: '/ @notice Does nothing',
        range: [266, 290],
        loc: {
          start: { line: 12, column: 4 },
          end: { line: 12, column: 28 },
        },
      },
      {
        type: 'LineComment',
        value: '/ @dev just to show comments',
        range: [295, 325],
        loc: {
          start: { line: 13, column: 4 },
          end: { line: 13, column: 34 },
        },
      },
      {
        type: 'LineComment',
        value: ' solhint-disable-previous-line no-empty-blocks',
        range: [351, 399],
        loc: {
          start: { line: 15, column: 8 },
          end: { line: 15, column: 56 },
        },
      },
      {
        type: 'BlockComment',
        value: '\n       * comment trailing function\n       ',
        range: [406, 453],
        loc: {
          start: { line: 16, column: 6 },
          end: { line: 18, column: 9 },
        },
      },
      {
        type: 'BlockComment',
        value: '\n       * BlockComment trailing BlockComment\n       ',
        range: [454, 510],
        loc: {
          start: { line: 18, column: 10 },
          end: { line: 20, column: 9 },
        },
      },
      {
        type: 'BlockComment',
        value: '\n* comment trailing function\n',
        range: [512, 545],
        loc: {
          start: { line: 21, column: 1 },
          end: { line: 23, column: 2 },
        },
      },
      {
        type: 'LineComment',
        value: ' LineComment trailing BlockComment',
        range: [546, 582],
        loc: {
          start: { line: 23, column: 3 },
          end: { line: 23, column: 39 },
        },
      },
    ])
  })
})
