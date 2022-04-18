import React from 'react';
import useCounter from '@/useCounter';
function Counter() {
    const { count, decrement, increment } = useCounter();
    return (React.createElement("div", null,
        React.createElement("button", { type: "button", onClick: decrement }, "-"),
        React.createElement("span", null, count),
        React.createElement("button", { type: "button", onClick: increment }, "+")));
}
export default Counter;
