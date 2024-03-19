function cartExtport() {
 
    fetch("https://65f2497c034bdbecc7648b04.mockapi.io/api/v1/cart")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro na solicitação da API");
      }
      return response.json();
    })
    .then((data) => {
      // Processar os dados da resposta
      console.log(data);
      // Aqui você pode manipular os dados como desejar
    })
    .catch((error) => {
      console.error("Houve um erro:", error);
    });


}
