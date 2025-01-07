const processors = [
    {
        name: "TTR X1",
        specs: "6/256 U1Max 95hz 5500mAh",
        link: "ttrx1.html"
    },
    {
        name: "TTR X2",
        specs: "8/256 Hype S3 125hz 5337mAh",
        link: "ttrx2.html"
    },
    {
        name: "TTR X3",
        specs: "8/256 U3Max 144hz 6233mAh",
        link: "ttrx3.html"
    },
];

const processorList = document.getElementById("processor-list");

processors.forEach((processor) => {
    // ��lemci kart� olu�tur
    const card = document.createElement("a");
    card.className = "processor-card";
    card.href = processor.link; // ��lemciye ait ba�lant�
    card.target = "_blank"; // Yeni sekmede a�
    card.rel = "noopener noreferrer"; // G�venlik i�in

    card.innerHTML = `
        <h3>${processor.name}</h3>
        <p>${processor.specs}</p>
    `;

    processorList.appendChild(card);
});
