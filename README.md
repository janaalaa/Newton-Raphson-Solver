# Newton-Raphson Solver

A web-based numerical solver that implements the **Newton-Raphson Method** to approximate roots of nonlinear equations.

## About the Project

Newton-Raphson Solver is an interactive web application that allows users to enter a nonlinear mathematical function and an initial guess. The application calculates an approximate root using the Newton-Raphson iterative algorithm.

It also displays the iteration details and visualizes the function using an interactive graph.

## Mathematical Formula

The application uses the Newton-Raphson formula:

\[
x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}
\]

The iterations continue until the convergence tolerance is reached or the maximum number of iterations is exceeded.

## Features

- User-defined nonlinear functions.
- Automatic symbolic differentiation.
- Newton-Raphson root approximation.
- Configurable initial guess through user input.
- Iteration count display.
- Detailed iteration results table.
- Interactive function graph.
- Visualization of iteration points.
- Input validation and error handling.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Math.js
- Plotly.js

## How to Use

1. Open the application.
2. Enter a nonlinear function using `x` as the variable.
3. Enter an initial guess (X₀).
4. Click **Calculate Root**.
5. View the approximate root and number of iterations.
6. Examine the iteration table and function graph.

## Example

**Input Function:**

```text
x^3 - 8*x + 5
```

**Initial Guess:**

```text
0
```

The application approximates a root near:

```text
0.661120
```

## Project Structure

```text
Newton-Raphson-Solver/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── README.md
```