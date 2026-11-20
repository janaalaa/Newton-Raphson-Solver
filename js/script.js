// Get HTML Elements
const functionInput = document.getElementById("function");
const initialGuessInput = document.getElementById("initialGuess");
const solveButton = document.getElementById("solveBtn");

const resultsSection = document.getElementById("resultsSection");
const rootResult = document.getElementById("rootResult");
const iterationCount = document.getElementById("iterationCount");
const iterationTable = document.getElementById("iterationTable");

// Newton-Raphson Method
solveButton.addEventListener("click", function () {

    // Get user inputs
    const expression = functionInput.value;
    const x0 = Number(initialGuessInput.value);

    // Validate inputs
    if (expression.trim() === "" || initialGuessInput.value === "") {
        alert("Please enter the function and initial guess.");
        return;
    }

    if (!Number.isFinite(x0)) {
        alert("Please enter a valid initial guess.");
        return;
    }

    try {

        // Parse function
        const parsedFunction = math.parse(expression);

        // Calculate derivative
        const derivative = math.derivative(parsedFunction, "x");

        // Initial values
        let xCurrent = x0;

        const tolerance = 0.000001;
        const maxIterations = 100;

        let converged = false;
        let iteration = 0;

        // Store iteration results
        let results = [];

        // Iteration Loop
        for (let i = 1; i <= maxIterations; i++) {

            const fx = parsedFunction.evaluate({ x: xCurrent });
            const dfx = derivative.evaluate({ x: xCurrent });

            // Check derivative
            if (!Number.isFinite(dfx) || Math.abs(dfx) < 1e-12) {
                alert("Derivative is zero or too close to zero.");
                return;
            }

            // Newton-Raphson Formula
            const xNext = xCurrent - (fx / dfx);

            if (!Number.isFinite(fx) || !Number.isFinite(xNext)) {
                alert("Calculation failed. Try another initial guess.");
                return;
            }

            // Save current iteration
            results.push({
                iteration: i,
                x: xCurrent,
                fx: fx,
                dfx: dfx,
                nextX: xNext
            });

            iteration = i;

            // Check convergence
            if (Math.abs(xNext - xCurrent) < tolerance) {
                xCurrent = xNext;
                converged = true;
                break;
            }

            xCurrent = xNext;
        }

        // Display root
        rootResult.textContent = converged
            ? xCurrent.toFixed(8)
            : "Not Converged";

        // Display iteration count
        iterationCount.textContent = iteration;

        // Display iteration table
        iterationTable.innerHTML = "";

        results.forEach(function (item) {

            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${item.iteration}</td>
                <td>${item.x.toFixed(8)}</td>
                <td>${item.fx.toFixed(8)}</td>
                <td>${item.dfx.toFixed(8)}</td>
                <td>${item.nextX.toFixed(8)}</td>
            `;

            iterationTable.appendChild(row);

        });

        // Show results section
        resultsSection.hidden = false;
        // Draw Function Graph

// Get X values around the initial guess
const xValues = [];
const yValues = [];

const startX = x0 - 5;
const endX = x0 + 5;
const step = 0.1;

for (let x = startX; x <= endX; x += step) {

    try {
        const y = parsedFunction.evaluate({ x: x });

        if (Number.isFinite(y)) {
            xValues.push(x);
            yValues.push(y);
        } else {
            xValues.push(x);
            yValues.push(null);
        }

    } catch (error) {
        xValues.push(x);
        yValues.push(null);
    }
}

// Get iteration points
const iterationX = [];
const iterationY = [];

results.forEach(function (item) {
    iterationX.push(item.x);
    iterationY.push(item.fx);
});

// Function Curve
const functionTrace = {
    x: xValues,
    y: yValues,
    mode: "lines",
    name: "f(x)",
    line: {
        color: "#2563eb",
        width: 3
    }
};

// Iteration Points
const pointsTrace = {
    x: iterationX,
    y: iterationY,
    mode: "markers",
    name: "Iteration Points",
    marker: {
        color: "#ef4444",
        size: 9
    }
};

// Graph Layout
const graphLayout = {
    title: "Newton-Raphson Function Graph",
    xaxis: {
        title: "X"
    },
    yaxis: {
        title: "f(X)"
    },
    showlegend: true,
    plot_bgcolor: "#f8fafc",
    paper_bgcolor: "#f8fafc"
};

// Draw Graph
Plotly.newPlot(
    "graph",
    [functionTrace, pointsTrace],
    graphLayout,
    { responsive: true }
);

    } catch (error) {

        alert("Invalid mathematical function. Please check your equation.");

    }

});