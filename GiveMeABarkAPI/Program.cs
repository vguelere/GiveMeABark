var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

app.MapGet("/barks", () =>
{
    return new[]
    {
        new
        {
            id = 1,
            palavra = "abelha",
            frase = "Pequena abelha, grande viajante."
        },
        new
        {
            id = 2,
            palavra = "lua",
            frase = "A lua observa tudo em silêncio."
        },
        new
        {
            id = 3,
            palavra = "cachorro",
            frase = "O cachorro corre atrás do vento."
        }
    };
});

app.Run();