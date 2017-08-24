function PlotFour() {

    this.grid = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ];

    this.diagonals = function() {
        var longDiagonals = [],
            diagonal,
            row,
            col;

        for (let i = -5; i < this.grid[0].length; i++) {
            diagonal = '';
            for (row = 0; row < this.grid.length; row++) {
                col = row + i;
                if (this.grid[row][col] !== undefined) diagonal += this.grid[row][col];
            }
            longDiagonals.push(diagonal);
            diagonal = '';
            for (row = this.grid.length - 1, col = i; row >= 0, col < i + this.grid.length ; row--, col++) {
                if (this.grid[row][col] !== undefined) diagonal += this.grid[row][col];
            }
            longDiagonals.push(diagonal);
        }

        return longDiagonals.filter(diagonal => {
            return diagonal.length > 3;
        });
    };

    this.rows = function() {
        return this.grid.map(row => {
            return row.join('');
        });
    };

    this.columns = function() {
        let cols = [],
            column;

        for (let col = 0; col < this.grid[0].length; col++) {
            column = '';
            for (let row = 0; row < this.grid.length; row++) {
                column += this.grid[row][col];
            }
            cols.push(column);
        }

        return cols;
    };

    this.lines = function() {
        return this.diagonals().concat(this.rows(), this.columns());
    };

    this.play = function(col) {

        if (this.gameOver) return 'Game has finished!';
        if (this.grid[0][col] !== 0) return 'Column full!';

        var four = this.player.toString().repeat(4),
            lines,
            currentPlayer = this.player;

        for (let row = 5; row >= 0; row--) {
            if (this.grid[row][col] === 0) {
                this.grid[row][col] = this.player;
                break;
            }
        }

        lines = this.lines();

        for (let i = 0; i < lines.length; i++) {
            if (lines[i].includes(four)) {
                this.gameOver = true;
                return 'Player ' + this.player + ' wins!';
            }
        }

        this.player = this.player === 1 ? 2 : 1;

        return 'Player ' + this.player + "'s turn";
    };

    this.player = 1;
    this.gameOver = false;
};
