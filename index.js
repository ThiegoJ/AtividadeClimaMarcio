const API_KEY = "92d21127194d27d3678d86f7ef45a9f9";

function consultarClima() {
    const cidade = document.getElementById("cidade").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API_KEY}&units=metric`;
    axios.get(url)
        .then(response => {
            const clima = response.data;
            const resultado = document.getElementById("resultado");
            resultado.innerHTML = `
            <p>Temperatura: ${clima.main.temp}°C</p>
            <p>Umidade: ${clima.main.humidity}%</p>
            <p>Velocidade do vento: ${clima.wind.speed} km/h</p>
            `;
        })
        .catch(error => {
            console.error(error);
            const resultado = document.getElementById("resultado");
            resultado.innerHTML = "Erro ao consultar o clima.";
        });
}