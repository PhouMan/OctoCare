import './helloworld.css';
import { useEffect, useState } from 'react';

function Helloworld() {
    const [gridItems, setGridItems] = useState([]);
    const [clickedItems, setClickedItems] = useState(new Set());
    const [bouncingPixel, setBouncingPixel] = useState({ row: 0, col: 0, direction: { x: 1, y: 1 } });

    const itemSize = 8; // Size of each grid item in pixels
    const width = window.innerWidth;
    const height = window.innerHeight;
    const cols = Math.ceil(width / itemSize);
    const rows = Math.ceil(height / itemSize);

    // Calculate the offset to center the letters
    const textWidth = 55; // Width of the entire text block in grid units
    const textHeight = 8; // Height of the entire text block in grid units
    const offsetX = Math.floor((cols - textWidth) / 2);
    const offsetY = Math.floor((rows - textHeight) / 2);

    // Convert coordinates to indices and set initial clicked items
    const initialCoordinates = [
        // H
        [0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [2, 1], [0, 2], [1, 2], [2, 2], [3, 2], [4, 2],
        // E
        [0, 5], [1, 5], [2, 5], [3, 5], [4, 5], [0, 6], [0, 7], [2, 6], [2, 7], [4, 6], [4, 7],
        // L
        [0, 10], [1, 10], [2, 10], [3, 10], [4, 10], [4, 11], [4, 12],
        // L
        [0, 15], [1, 15], [2, 15], [3, 15], [4, 15], [4, 16], [4, 17],
        // O
        [3, 20], [2, 20], [1, 20], [0, 21], [0, 22], [4, 21], [4, 22], [3, 23], [2, 23], [1, 23],
        // W
        [0, 29], [1, 29], [2, 29], [3, 29], [4, 29], [3, 31], [2, 31], [1, 31], [0, 31], [4, 30], [4, 31], [4, 32], [4, 33], [3, 33], [2, 33], [1, 33], [0, 33],
        // O
        [1, 36], [2, 36], [3, 36], [4, 37], [4, 38], [3, 39], [2, 39], [1, 39], [0, 38], [0, 37],
        // R
        [0, 42], [1, 42], [2, 42], [3, 42], [4, 42], [0, 43], [0, 44], [1, 45], [2, 45], [2, 43], [2, 44], [3, 44], [4, 45],
        // L
        [0, 48], [1, 48], [2, 48], [3, 48], [4, 48], [4, 49], [4, 50],
        // D
        [4, 53], [3, 53], [2, 53], [1, 53], [0, 53], [0, 54], [0, 55], [4, 54], [4, 55], [3, 56], [2, 56], [1, 56],
    ];
    const initialClickedItems = new Set(initialCoordinates.map(([row, col]) => (row + offsetY) * cols + (col + offsetX)));

    useEffect(() => {
        const totalItems = cols * rows;

        setClickedItems(initialClickedItems);

        setGridItems(Array.from({ length: totalItems }, (_, index) => (
            <div
                key={index}
                className={`grid-item ${initialClickedItems.has(index) ? 'initial' : ''}`}
            ></div>
        )));

        const interval = setInterval(() => {
            setBouncingPixel((prev) => {
                let { row, col, direction } = prev;
                let newRow = row + direction.y;
                let newCol = col + direction.x;

                if (newRow < 0 || newRow >= rows) {
                    direction.y *= -1;
                    newRow = row + direction.y;
                }
                if (newCol < 0 || newCol >= cols) {
                    direction.x *= -1;
                    newCol = col + direction.x;
                }

                return { row: newRow, col: newCol, direction };
            });
        }, 100);

        return () => clearInterval(interval);
    }, []); // Ensure this runs only once

    const handleGridClick = () => {
        const index = bouncingPixel.row * cols + bouncingPixel.col;
        setClickedItems((prev) => {
            const newClickedItems = new Set(prev);
            newClickedItems.add(index);
            return newClickedItems;
        });
    };

    return (
        <div className="grid" onClick={handleGridClick}>
            {gridItems.map((item, index) => (
                <div
                    key={index}
                    className={`grid-item ${initialClickedItems.has(index) ? 'initial' : clickedItems.has(index) ? 'clicked' : ''}`}
                ></div>
            ))}
            <div
                className="bouncing-pixel"
                style={{
                    transform: `translate(${bouncingPixel.col * itemSize}px, ${bouncingPixel.row * itemSize}px)`,
                    width: `${itemSize}px`,
                    height: `${itemSize}px`,
                    position: 'absolute',
                }}
            ></div>
        </div>
    );
}

export { Helloworld };