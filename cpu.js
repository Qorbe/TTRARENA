const processors = [
    { name: "TTR U1 Max", specs: "6 cores 2.2GHz 12nm" },
    { name: "TTR U2", specs: "8 cores 2.9 GHz 10nm" },
    { name: "TTR U3 Lite", specs: "8 cores 2.8 GHz 8nm" },
    { name: "TTR U3", specs: "8 cores 3.3 GHz 8nm" },
    { name: "TTR U3 Max", specs: "8 cores 3.4 GHz 6nm" },
    { name: "TTR U4", specs: "12 cores 3.6GHz 6nm" },
    { name: "TTR U4 Max", specs: "12 cores 3.7 GHz 5nm" },
    { name: "TTR U5", specs: "14 cores 4.23 GHz 4nm" },

];

const processorList = document.getElementById("processor-list");

processors.forEach((processor) => {
    const card = document.createElement("div");
    card.className = "processor-card";

    card.innerHTML = `
        <h3>${processor.name}</h3>
        <p>${processor.specs}</p>
    `;

    processorList.appendChild(card);
});
